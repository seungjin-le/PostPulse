const express = require('express')
const router = express()
const UserController = require('../conrollers/UserController')

// Register User
router.post('/register', UserController.registerUser)

// LogIn User
router.post('/login', UserController.loginUser)

// LogOut User
router.post('/logout', UserController.logOutUser)

// Delete User
router.delete('/delete', UserController.deleteUser)

module.exports = router
