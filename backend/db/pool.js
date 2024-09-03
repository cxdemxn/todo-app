const { Pool } = require('pg')
const { host, database, password } = require('pg/lib/defaults')

// module.exports = new Pool({
//     host: 'localhost',
//     user: 'bari',
//     database: 'iam_todo',
//     password: 'bariPostgres21',
//     port: 5432
// })
module.exports = new Pool({
    host: process.env.HOSTNAME,
    user: process.env.USERNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})