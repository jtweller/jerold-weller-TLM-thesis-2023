// routes for user controller and jsonwebtoken helper
const express = require('express')
const UserCtrl = require('../controllers/userController')
const router = express.Router()
const authenticateToken = require('../helper/verifyJWT')

router.get('/user', authenticateToken, UserCtrl.getUser)

module.exports = router