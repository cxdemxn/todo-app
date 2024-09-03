const pool = require('./pool')

async function allLists() {
    try {
        const result = await pool.query('select * from lists')
        return result.rows
    } catch (error) {
        console.error('Error getting all lists from db', error)
        throw error
    }
}

async function insertList(list) {
    await pool.query('INSERT INTO lists (list_id, name, color, btn_id) VALUES ($1, $2, $3, $4)', [list.id, list.name, list.color, list.btnId], (error, results) => {
        if (error) {
            // console.log(error)
        } else {
            // console.log(results)
            return results
        }
    })
}

async function getList(id) {
    try {
        const result = await pool.query('select * from lists where list_id=$1', [ id ])
        return result.rows[0]
    } catch (error) {
        console.error('Error getting list from db', error)
        throw error
    }
}

module.exports = {
    insertList,
    getList,
    allLists
}