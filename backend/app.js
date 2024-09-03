require ('dotenv').config({
    path: '.env.production'
})

const express = require('express');
const cors = require('cors')
const appRouter = require('./routes/appRouter')

const app = new express()

app.use(cors())
app.use(express.json())


// app.get('/', (req, res) => {
//     res.send('hello there')
// })

app.use('/api', appRouter)

module.exports = app




app.use((error, req, res, next) => {
    res.status(500).json({ error: 'Internal server error' })
})