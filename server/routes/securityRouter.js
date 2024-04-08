// this code is from the Authentication App on TLM Canvas
const express = require('express')
const UserCtrl = require('../controllers/userController')
const router = express.Router()

router.post('/register', UserCtrl.createUser)
router.post('/login', UserCtrl.loginUser)

module.exports = router