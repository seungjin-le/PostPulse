const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  postId: {
    type: Number,
    required: true,
  },
  postTitle: {
    type: String,
    required: true,
  },
  postContent: {
    type: String,
    required: true,
  },
  postImages: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post

//required: true,
