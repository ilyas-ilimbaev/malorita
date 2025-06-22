const Router = require('express')
const router = new Router()
const sendCodeController = require('../controllers/sendCodeController')

router.post('/',sendCodeController.create)


module.exports = router