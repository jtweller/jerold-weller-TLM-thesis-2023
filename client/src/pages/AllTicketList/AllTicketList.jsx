import { AllTickets } from '../../components/TicketCards'
import { useState, useEffect } from 'react';
import api from '../../api/index'

const AllTicketList = ({ onDelete }) => {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        // get all ticket info
        api.getAllTickets()
        .then(res => setTickets(res.data.data))
    },[tickets])

    return (
        <div className='ticketTitle'>
            <p><em>Admin is the only one who can delete tickets.</em></p>
            <div className='ticketWrapper'>
                {tickets.map((ticket) => (
                        <AllTickets
                            key={ticket.ticket_id}
                            id={ticket.ticket_id}
                            created={ticket.created}
                            customer={ticket.lastname}
                            phone={ticket.phone}
                            appliance={ticket.appliance}
                            issue={ticket.issue}
                            status={ticket.ticket_status}
                            assigned={ticket.assigned}
                            closed={ticket.closed}
                            owner={ticket.ticket_owner}
                            onDelete={onDelete}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default AllTicketList