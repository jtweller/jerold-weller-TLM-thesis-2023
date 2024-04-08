// routes for ticket controller
const express = require('express')
const TicketController = require('../controllers/ticketController')
const router = express.Router()

router.get('/tickets', TicketController.getTickets)
router.get('/ticket/:id', TicketController.getTicket)
router.put('/ticket/claim/:id', TicketController.claimTicket)
router.put('/ticket/close/:id', TicketController.closeTicket)
router.delete('/ticket/:id', TicketController.deleteTicket)

module.exports = router