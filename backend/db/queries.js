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
    try {
        const result = await pool.query('INSERT INTO lists (list_id, name, color, btn_id) VALUES ($1, $2, $3, $4)', [list.id, list.name, list.color, list.btnId])

        return result
    } catch (error) {
        console.error('Error inserting list', error.message)
        throw error
    }
}

async function getList(id) {
    try {
        const result = await pool.query('select * from lists where list_id=$1', [ id ])

        if (result.rowCount === 0) {
            throw new Error('No list with id ' + id)
        }

        return result.rows[0]
    } catch (error) {
        console.error('QUERY ERROR:', error.message)
        throw error
    }
}

async function getListCount() {
    try {
        const result = await pool.query('select count(*) from lists')
        

        return result
    } catch(err) {
        throw new Error(`Error fetching list count: ${err.message}`)
    } 
}

async function insertTask(task, listId) {
    try {
        const result = await pool.query('INSERT INTO tasks (task_id, title, completed, btn_id, list_id) VALUES ($1, $2, $3, $4, $5)', [task.id, task.title, task.completed, task.btnId, listId])

        return result
    } catch (error) {
        console.error('Error inserting task', error.message)
        throw error
    }
}

async function getTasks(listId) {
    try {
        const result = await pool.query('select * from tasks where list_id=$1', [ listId ])

        if (result.rowCount === 0) {
            return 0
            // throw new Error('No task with list id ' + listId)
        }

        return result.rows
    } catch (error) {
        console.error('QUERY ERROR:', error.message)
        throw error
    }
}

async function getTaskCount(listId) {
    try {
        const result = await pool.query('select count(*) from tasks where list_id = $1', [ listId ])
        
        return result.rows[0].count
    } catch(err) {
        throw new Error(`Error fetching list count: ${err.message}`)
    } 
}

module.exports = {
    insertList,
    getList,
    allLists,
    getListCount,
    insertTask,
    getTasks,
    getTaskCount
}