const Router = require('express')
const router = new Router()
const restInfoController = require('../controllers/restInfoController')

router.post('/',restInfoController.create)
router.get('/',restInfoController.getAll)


module.exports = router