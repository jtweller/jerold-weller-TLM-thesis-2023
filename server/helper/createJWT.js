// from TLM canvas but modified
const jwt = require('jsonwebtoken')
require('dotenv').config()

function createJWT(user) {
    const { JWT_SECRET } = process.env
    const token = jwt.sign({id: user[0].user_id}, JWT_SECRET, {
        expiresIn: 60000
    });
    return token
}

module.exports = createJWT