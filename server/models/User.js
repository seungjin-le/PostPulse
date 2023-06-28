const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema(
  {
    provider: String,
    type: String,
    providerAccountId: String,
    access_token: String,
    token_type: String,
    refresh_token: String,
    expires_at: Number,
    scope: String,
    refresh_token_expires_in: Number,
  },
  {_id: false},
)

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
      unique: true,
    },
    user: {
      id: String,
      name: String,
      email: String,
      image: String,
    },
    tokens: {
      type: tokenSchema,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {versionKey: false},
)
const User = mongoose.model('User', userSchema)

module.exports = User
