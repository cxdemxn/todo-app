const { Router } = require('express')
const listController = require('../controllers/listController')

const router = new Router()

router.get('/', listController.allLists)
router.post('/addList', listController.addList)
router.get('/count', listController.getListCount)
router.get('/:id', listController.getList)

module.exports = router