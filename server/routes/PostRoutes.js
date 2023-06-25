const express = require('express')
const router = express.Router()
const PostController = require('../conrollers/PostController')

// Get all posts
router.get('/', PostController.getAllPosts)

// Get a post by ID
router.get('/:id', PostController.getPost)

// Create a new post
router.post('/', PostController.createPost)

// Update a post by ID
router.put('/:id', PostController.updatePost)

// Delete a post by ID
router.delete('/:id', PostController.deletePost)
