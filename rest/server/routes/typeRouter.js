const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

// Создание типа (только для админа)
router.post('/', 
  checkRole('admin'),
  typeController.create
)

// Получение всех типов (публичный доступ)
router.get('/', 
  typeController.getAll
)

// Получение конкретного типа (публичный доступ)
router.get('/:id', 
  typeController.getOne
)

// Удаление типа (только для админа)
router.delete('/:id', 
  checkRole('admin'),
  typeController.deleteOne
)

module.exports = router