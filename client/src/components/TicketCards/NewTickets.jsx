import api from '../../api'

export const NewTickets = ({onClaim, isLoggedIn, username, id, location, appliance, issue, created, noTickets }) => {

    const claimTicket = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Do you want to claim the ticket ${id}?`,
            )
        ) {
            api.claimTicketById(id, {username})
                onClaim(id)
                alert(`You have claimed ticket: ${id}`)     
        }
    }

    if (noTickets === 0)
    {
        return (
            <h3>Currently None!</h3>
        )
    }

return (
    <div className='ticketInfo mt-3'>
    {isLoggedIn ? <span className="text-success">Ticket ID: {id}</span>
    : null}
        <br/>
        <span>Location: {location}</span>
        <br/>
        <span>Appliance: {appliance}</span>
        <br/>
        <span>Issue: <em>{issue}</em></span>
        <br/>
        <span>Created: {new Date(created).toLocaleString()}</span>
        <br/>
        {isLoggedIn ?
        <div className='btn btn-sm btn-warning mt-2 mx-2' onClick={claimTicket}>Claim</div>
        : null}
    </div>
)}