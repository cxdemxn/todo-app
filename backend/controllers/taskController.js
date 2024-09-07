const db = require('../db/queries')

exports.addTask = async (req, res) => {

    const { listId, task } = req.body
    
    if (!listId) {
        res.status(500).json({ error: 'task does not belong to a list '})
    }
    
    try {
        const data = await db.insertTask(task, listId)
    } catch (error) {
        console.error(`Error saving task to db:\n ${error.message}`)
        res.status(500).json({ errorMessage: error.message })
    }

    res.status(201).json(task)
}