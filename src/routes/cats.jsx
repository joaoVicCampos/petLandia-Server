const { Router } = require('express')
const { getAllCatsController
} = require('../controller/cats.jsx')

router = Router()

router.get('/', getAllCatsController)

module.exports = router