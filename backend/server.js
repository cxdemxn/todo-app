const express = require('express');

const server = new express()

server.get('/', (req, res) => {
    res.send('hello there')
    res.end()
})


server.listen(1984, () => { console.log('server listening on port 1984')})