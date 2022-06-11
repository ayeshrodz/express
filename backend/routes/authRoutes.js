const express = require('express')
const router = express.Router()

const { 
    loginUser,
    } = require('../controllers/authController');


// @desc   User routes
router.post('/login', loginUser)


module.exports = router