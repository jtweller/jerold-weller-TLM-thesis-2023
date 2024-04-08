import { useState } from 'react'
import api from '../../api'

export const MyTickets = ({onClose, id, created, customer, phone, appliance, issue, status, assigned, notes, closed, owner, noTickets}) => {
    const [noteText, setNoteText] = useState()

    const handleChange = (techNotes) => {
        techNotes.persist()
        const noteText = techNotes.target.value
        setNoteText(noteText)
    }

    const closeTicket = e => {
        e.preventDefault()
        if (
            window.confirm(
                `Do you want to close this ticket ${id}?`
            )
        ) {
            api.closeTicketById(id, {notes: noteText})
            alert(`Ticket ${id} has been closed`)
            onClose(id)
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
        <span className="text-success">Ticket ID: {id}</span>
        <br/>
        <span>Created: {new Date(created).toLocaleString()}</span>
        <br/>
        <span>Customer: <em>{customer}</em></span>
        <br/>
        <span>Phone: <em>{phone}</em></span>
        <br/>
        <span>Appliance: <em>{appliance}</em></span>
        <br/>
        <span>Issue: <em>{issue}</em></span>
        <br/>
        <span>Status: <em>{status}</em></span>
        <br/>
        <span>Assigned: {new Date(assigned).toLocaleString()}</span>
        <br/>
        <span>Notes: <em>{notes}</em></span>
        <br/>
        {!closed ?
        <textarea onChange={techNotes => handleChange(techNotes)} placeholder='add notes here:' defaultValue={noteText}></textarea>: null}
        <br/>
        {closed ?
        <span>Closed: {new Date(closed).toLocaleString()}</span> : null}
        <br/>
        <span>Owner: {owner}</span>
        <br />
        {status === 'open' ? <div className='btn btn-sm btn-info mt-2 mx-2' onClick={closeTicket}>Close</div>
        : null}
    </div>
)}


