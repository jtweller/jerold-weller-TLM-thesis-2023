const express = require('express')
const cors = require('cors')
require('dotenv').config()

const connection = require('./connection')
const routes = require('./routes/index')

const app = express()
const apiPort = 3330

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

connection.on('error', console.error.bind(console, 'mySQL connection error:'))

app.get('/', (req, res) => {
    res.send('Server is up!')
})

app.use('/api', routes)

app.listen(apiPort, (err) =>
console.log(`${err ? err : `api server is running at http://localhost:${apiPort}`}`)
)