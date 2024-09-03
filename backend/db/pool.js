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
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})