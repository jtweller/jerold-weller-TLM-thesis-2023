// this code is from the Authentication App on TLM Canvas
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) return res.sendStatus(401)
    await jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const {id} = user
        req.user = id
        next()
    })
}

module.exports = authenticateToken