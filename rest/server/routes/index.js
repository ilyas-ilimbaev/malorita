const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const reviewRouter = require('./reviewRouter')
const restInfoRouter = require('./restInfoRouter')
const orderRouter = require('./orderRouter')
const sendCodeRouter = require('./sendCodeRouter')


router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/item',itemRouter)
router.use('/review',reviewRouter)
router.use('/info',restInfoRouter)
router.use('/order',orderRouter)
router.use('/send',sendCodeRouter)

module.exports = router