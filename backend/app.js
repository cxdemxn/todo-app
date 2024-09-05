require ('dotenv').config({
    path: '.env.development'
})

const express = require('express');
const cors = require('cors')
const appRouter = require('./router/appRouter')
const listRouter = require('./router/listRouter')

const app = new express()


app.use(cors())
app.use(express.json())



app.use('/api', appRouter)
app.use('/api/list', listRouter)

module.exports = app




app.use((error, req, res, next) => {
    res.status(500).json({ error: 'Internal server error' })
})