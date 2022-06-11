const express = require('express')
const router = express.Router()

const { 
    getUser,
    registerUser,
    } = require('../controllers/userController');


// @desc   User routes
router.post('/', registerUser);
router.get('/me', getUser)


module.exports = router