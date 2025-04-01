const { Router } = require('express')
const { getAllDogsController
} = require('../controller/dogs.jsx')

router = Router()

router.get('/', getAllDogsController)

module.exports = router