const { Router } = require('express')
const appController = require('../controllers/listController')

const router = new Router()

router.get('/', appController.allLists)

module.exports = router