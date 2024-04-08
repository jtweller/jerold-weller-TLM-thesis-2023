import { Link } from 'react-router-dom'
import { NewTickets } from '../../components/TicketCards'
import { useState, useEffect } from 'react';
import api from '../../api/index'

const NewTicketList = ({ isLoggedIn, username, onClaim }) => {
    const [noTickets, setNoTickets] = useState(0)
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        // get all ticket info
        api.getAllTickets()
        .then(res => setTickets(res.data.data))

        tickets.map(ticket => {
            let tickets = 0
            ticket.ticket_status === 'new' ?
            tickets++ : tickets
            if (tickets !== 0){
            setNoTickets(tickets)
            }
        })
    },[tickets])

    return (
        <div className='ticketTitle'>
        {isLoggedIn ?
        <p><em>Claim the tickets you would like, then return to your tickets via the ticket tracker link.</em></p>
        : <p><em>These tickets are available to claim, you will need to have an <Link to='/register'>account</Link> and <Link to='/login'>login</Link> to do so.</em></p>}
            <div className='ticketWrapper'>
                {noTickets > 0 ?
                    tickets.map(ticket => (
                        ticket.ticket_status === 'new' ?
                        <NewTickets
                            key={ticket.ticket_id}
                            id={ticket.ticket_id}
                            created={ticket.created}
                            location={ticket.location}
                            appliance={ticket.appliance}
                            issue= {ticket.issue}
                            status={ticket.ticket_status}
                            onClaim={onClaim}
                            isLoggedIn={isLoggedIn}
                            username={username}
                            noTickets={noTickets}
                        /> : null
                    )) : <NewTickets noTickets={noTickets}/>
                }
            </div>
        </div>
    )
}
export default NewTicketList
