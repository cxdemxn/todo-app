const Router = require('express')
const taskController = require('../controllers/taskController')

const router = new Router()

router.post('/add', taskController.addTask)
router.put('/toggle', taskController.toggleTask)

module.exports = router