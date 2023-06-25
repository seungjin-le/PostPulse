const express = require('express')
const router = express()
const PostController = require('../conrollers/PostController.js')

// Get all posts
router.get('/posts', PostController.getAllPosts)

// Get post
router.get('/posts/:id', PostController.getPost)

// Create new post
router.post('/posts', PostController.createPost)

// Update post
router.put('/posts/:id', PostController.updatePost)

// Delete post
router.delete('/posts/:id', PostController.deletePost)

module.exports = router
