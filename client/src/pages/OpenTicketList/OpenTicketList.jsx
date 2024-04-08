import { MyTickets } from '../../components/TicketCards'
import { useState, useEffect } from 'react';
import api from '../../api/index'

const OpenTicketList = ({ username, onClose }) => {
    const [noTickets, setNoTickets] = useState(0)
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        // get all ticket info
        api.getAllTickets()
        .then(res => setTickets(res.data.data))

        tickets.map(ticket => {
            let tickets = 0
            username === ticket.ticket_owner && ticket.ticket_status === 'open' ?
            tickets++ : tickets
            if (tickets !== 0){
            setNoTickets(tickets)
            }
        })
    },[tickets])

    return (
        <div className='ticketTitle'>
           <p><em>These are your open tickets, you can add notes and close the ticket.</em></p>
            <div className='ticketWrapper'>
            {noTickets > 0 ?
                  tickets.map((ticket) => (
                    ticket.ticket_owner === username && ticket.ticket_status === 'open' ?
                    <MyTickets
                        key={ticket.ticket_id}
                        id={ticket.ticket_id}
                        created={ticket.created}
                        customer={ticket.lastname}
                        phone={ticket.phone}
                        appliance={ticket.appliance}
                        issue= {ticket.issue}
                        status={ticket.ticket_status}
                        assigned={ticket.assigned}
                        closed={ticket.closed}
                        owner={ticket.owner}
                        notes={ticket.notes}
                        onClose={onClose}
                    /> : null
                  )) : <MyTickets noTickets={noTickets} />
                }
            </div>
        </div>
    )
}
export default OpenTicketList
