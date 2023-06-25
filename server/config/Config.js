require('dotenv').config()

const config = {
  mongodb: {
    url: process.env.MONGODB_URL || 'mongodb://localhost:27017/posts',
  },
  server: {
    port: process.env.PORT || 4000,
  },
}

module.exports = config
