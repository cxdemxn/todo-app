const server = require('./app')

server.listen( process.env.PORT, () => { console.log(`server listening on port ${process.env.PORT}`)})