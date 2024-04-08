import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userInfo } from '../../api/index'
import './Links.css'

const logout = () => {
    window.localStorage.removeItem('api_token')
    window.location = '/'
}

const Links = ({ isLoggedIn }) => {
    const [username, setUsername] = useState()
    
    useEffect(() => {
        isLoggedIn ?
        userInfo().then(res => {
            const {user} = res.data
            setUsername(user[0].username)
        })
            :  setUsername('')
    },[isLoggedIn])
       
    return (
        <div>
          <div className="dropdown">
            <button className="btn-sm btnWrap dropdown-toggle dropToggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Service Ticket Tracker
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/" className="nav-link">Home</Link>
            {isLoggedIn && username === 'admin' ? <Link to="/tickets/list" className="nav-link">All Tickets</Link>
            : isLoggedIn ?
            <div>
            <Link to="/tickets/new" className="nav-link">Claim New Tickets</Link>
            <div className="mx-2">View:</div>
            <Link to="/tickets/myOpen" className="nav-link">My Open Tickets</Link>
            <Link to="/tickets/myClosed" className="nav-link">My Closed Tickets</Link>
            </div>
            : <Link to="/tickets/new" className="nav-link">View New Tickets</Link>}
            </div>
          </div>
          {isLoggedIn ? 
                    <button className="btn btn-sm btn-logout mt-2" onClick={logout}>Logout</button>
                    :
                    ''
                }    
        </div>
        )
    }

export default Links