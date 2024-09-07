const Router = require('express')
const taskController = require('../controllers/taskController')

const router = new Router()

router.post('/add', taskController.addTask)

module.exports = router