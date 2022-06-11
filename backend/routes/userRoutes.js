const express = require('express')
const router = express.Router()

const { 
    getUser,
    registerUser,
    } = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');
const { route } = require('./projectRoutes');

// @desc   User routes
router.post('/', registerUser);
router.get('/me', protect, getUser)

module.exports = router