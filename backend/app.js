const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: './.env.production'})
} else if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: './.env.development'})
} else {
    dotenv.config()
}

const express = require('express');
const cors = require('cors')
const appRouter = require('./router/appRouter')
const listRouter = require('./router/listRouter')

const app = new express()

console.log(process.env)

app.use(cors())
app.use(express.json())



app.use('/api', appRouter)
app.use('/api/list', listRouter)

module.exports = app




app.use((error, req, res, next) => {
    res.status(500).json({ error: 'Internal server error' })
})