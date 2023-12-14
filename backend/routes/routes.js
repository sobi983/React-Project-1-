const express = require('express')
const router = express.Router()


router.get('/api/v1/getUsers', require('../controller/getUser').getUser)
router.post('/api/v1/signUp', require('../controller/signUp').signUp)


module.exports = router