const express = require('express')
const SecurityRouter = require('./securityRouter')
const UserRouter = require('./userRouter')
const TicketRouter = require('./ticketRouter')

const router = express.Router()

router.use('/', SecurityRouter)
router.use('/', UserRouter)
router.use('/', TicketRouter)

module.exports = router