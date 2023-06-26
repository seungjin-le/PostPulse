const Posts = require('../models/Post')

const PostController = {
  createPost: async (req, res) => {
    async function getNextPostId() {
      const lastPost = await Posts.findOne({}, {}, {sort: {postId: -1}})
      return lastPost ? lastPost.postId + 1 : 0
    }
    try {
      const post = new Posts(req.body)
      post.postId = await getNextPostId()
      //result, isSuccess, code, message
      await post.save()
      res.status(201).send({
        result: post,
        isSuccess: true,
        code: 201,
        message: 'Post successfully created',
      })
    } catch (error) {
      res.status(400).send({
        result: null,
        isSuccess: false,
        code: 400,
        message: 'Failed to create post',
        error: error.message,
      })
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
