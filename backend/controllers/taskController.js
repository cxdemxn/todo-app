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

    console.log(task)
    res.status(201).json(task)
}

exports.toggleTask = async (req, res) => {
    const { id, completed } = req.body

    try {
        await db.updateTaskCompleted(id, completed)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: error.message })
    }

    res.status(201).json({ message: 'task updated successfully'})
}