const { Pool } = require('pg')
const { host, database, password } = require('pg/lib/defaults')

module.exports = new Pool({
    host: 'localhost',
    user: 'bari',
    database: 'iam_todo',
    password: 'bariPostgres21',
    port: 5432
})