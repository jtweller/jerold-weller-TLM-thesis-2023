import { useState, useEffect } from 'react'
import api, { userInfo } from '../api/index'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import AllTicketList from '../pages/AllTicketList'
import OpenTicketList from '../pages/OpenTicketList'
import ClosedTicketList from '../pages/ClosedTicketList'
import NewTicketList from '../pages/NewTicketList'
import Home from '../pages/Home'
import { Register } from '../pages/Forms'
import { Login } from '../pages/Forms'
import DashBoard from '../pages/DashBoard'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const NotFound = ()=> {
    return (
        <div className="wrapper">
         <h3>Oops, Page Not Found</h3>
         <Link to="/">Home</Link>
        </div>
    )
}

function App() {
    const token = window.localStorage.getItem('api_token')
    const isLoggedIn =  token ? true : false
    const [tickets, setTickets] = useState([])
    const [username, setUsername] = useState()

    useEffect(() => {
        // if logged in get user info
        isLoggedIn ?
        userInfo().then(res => {
            const {user} = res.data
            setUsername(user[0].username)
        })
            : setUsername('')
    }, [isLoggedIn])

    const onDelete = ticket_id => {
        console.log(`Ticket ${ticket_id} deleted`)
        setTickets(tickets.filter(ticket => ticket.ticket_id !== ticket_id))
      }
    
    const onClose = ticket_id => {
        console.log(`Ticket ${ticket_id} closed`)
        setTickets(tickets.filter(ticket => ticket.ticket_id !== ticket_id))
    }

    const onClaim = ticket_id => {
        console.log(`Ticket ${ticket_id} claimed`)
        setTickets(tickets.filter(ticket => ticket.ticket_id !== ticket_id))
    }

    const ticketFodder = {onDelete, onClose, onClaim, username, isLoggedIn}
    return (
        <Router >
            <NavBar isLoggedIn={isLoggedIn} />
            <Routes>
                <Route path="/" element={isLoggedIn ? <DashBoard {...ticketFodder}/>
                : <Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tickets/list" element={<AllTicketList {...ticketFodder}/>} />
                <Route path="/tickets/myOpen" element={<OpenTicketList {...ticketFodder}/>} />
                <Route path="/tickets/myClosed" element={<ClosedTicketList {...ticketFodder}/>} />
                <Route path="/tickets/new" element={<NewTicketList {...ticketFodder}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
export default App