const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    userNickName: {
      type: String,
      required: true,
    },
    postId: {
      type: Number,
      required: true,
      unique: true,
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
      //required: true,
    },
    postTags: {
      type: [String],
      //required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {versionKey: false},
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
