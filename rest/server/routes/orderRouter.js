const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/',orderController.create)
router.post('/:order_id',orderController.addMenuItem)
router.get('/',orderController.getAll)
router.get('/:id',orderController.getOne)
router.delete('/:id',orderController.deleteOne)
router.put('/:id',orderController.updateOrder)

module.exports = router