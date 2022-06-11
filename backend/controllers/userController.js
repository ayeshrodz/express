const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')


// @desc    Get user info
// @route   GET /api/users/me
// @access  Private
const getUser = asyncHandler(async (req, res) => {
    const {_id, name, email } = await User.findById(req.user.id).select('-password')
    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields for the user')
    }

    // Check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        salt,
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
    })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }

})


module.exports = {
    getUser,
    registerUser,
}