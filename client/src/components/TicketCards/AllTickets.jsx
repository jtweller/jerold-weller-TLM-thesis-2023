import api from '../../api'

export const AllTickets = ({onDelete, id, created, customer, phone, appliance, issue, status, assigned, closed, owner}) => {

    const deleteTicket = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Do you want to delete this ticket ${id}?`,
            )
        ) {
            api.deleteTicketById(id)
                onDelete(id)
                alert(`ticket: ${id} was deleted permenantly`)   
        }
    }

return (
    <div className='ticketInfo mt-3'>
        <span className="text-success">Ticket ID: {id}</span>
        <br/>
        <span>Created: {new Date(created).toLocaleString()}</span>
        <br/>
        <span>Customer: {customer}</span>
        <br/>
        <span>Phone: {phone}</span>
        <br/>
        <span>Appliance: {appliance}</span>
        <br/>
        <span>Issue: <em>{issue}</em></span>
        <br/>
        <span>Status: <em>{status}</em></span>
        <br/>
        {assigned ?
        <span>Assigned: {new Date(assigned).toLocaleString()}</span>
        : <span>Assigned: {assigned}</span>}
        <br/>
        {closed ?
        <span>Closed: {new Date(closed).toLocaleString()}</span>
        : <span>Closed: {closed}</span>}
        <br/>
        <span>Owner: {owner}</span>
        <br/>
        <span className='btn btn-sm btn-danger mt-2 mx-2' onClick={deleteTicket}>Delete</span>
    </div>
)}



