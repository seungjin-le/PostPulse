const Posts = require('../models/Post')

const PostController = {
  // Create a new post
  createPost: async (req, res) => {
    console.log(req.body)
    try {
      const post = new Posts(req.body)
      await post.save()
      res.status(201).send(post)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  // Get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Posts.find({})
      res.send(posts)
    } catch (error) {
      res.status(500).send(error)
    }
  },

  // Get a post by ID
  getPost: async (req, res) => {
    try {
      const post = await Posts.findOne({postId: req.params.id})
      if (!post) return res.status(404).send()
      res.send(post)
    } catch (error) {
      res.status(500).send(error)
    }
  },

  // Update a post by ID
  updatePost: async (req, res) => {
    try {
      const post = await Posts.findOneAndUpdate({postId: req.params.id}, req.body, {new: true})
      if (!post) return res.status(404).send()
      res.send(post)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  // Delete a post by ID
  deletePost: async (req, res) => {
    try {
      const post = await Posts.findOneAndDelete({postId: req.params.id})
      if (!post) {
        return res.status(404).send()
      }
      res.send(post)
    } catch (error) {
      res.status(500).send(error)
    }
  },
}

module.exports = PostController
