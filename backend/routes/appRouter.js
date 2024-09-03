const { Router } = require('express')
const appController = require('./../controllers/appController')

const router = new Router()

router.get('/', appController.allLists)
router.post('/addList', appController.addList)
router.get('/list/:id', appController.getList)

module.exports = router