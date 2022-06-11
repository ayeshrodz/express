const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // Check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }
    
})



module.exports = {
    loginUser,
}