const connection = require('../connection')

// get all tickets from tickets table
getTickets = async (req, res) => {
    connection.query("Select customers.*, tickets.* from tickets inner join customers on tickets.customer_no = customers.customer_id", function(err, tickets) {
    if (err) {
      return res.status(500).end()
    }
    res.status(200).json({ success: true, data: tickets })
  })
}

// get all tickets from tickets table
getTicket = async (req, res) => {
  connection.query(`SELECT * FROM tickets WHERE ticket_id = ${req.params.id};`, function(err, ticket) {
  if (err) {
    return res.status(500).end()
  }
  res.status(200).json({ success: true, data: ticket })
})
}

// claim new ticket
claimTicket = async (req, res) => {
  const {username} = req.body
    connection.query(`UPDATE tickets SET ? WHERE ticket_id = ${req.params.id}`,
        {
          ticket_status: 'open',
          ticket_owner: username,
          assigned: new Date()
        }
    )
}

// close ticket
closeTicket = async (req, res) => {
  const {notes} = req.body
    connection.query(`UPDATE tickets SET ? WHERE ticket_id = ${req.params.id}`,
        {
          ticket_status: 'closed',
          notes: notes,
          closed: new Date()
        }
    )
}

// delete ticket by id, only admin user has access to this function
deleteTicket = async (req, res) => {
  connection.query("DELETE FROM tickets WHERE ticket_id = ?", [req.params.id], function(err, result) {
    if (err) {
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
}

module.exports = {
    getTickets,
    getTicket,
    claimTicket,
    closeTicket,
    deleteTicket
}