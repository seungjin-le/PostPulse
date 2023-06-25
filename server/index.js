const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const postRoutes = express.Router()
const config = require('./config/Config')
const app = express()

// MongoDB에 연결
mongoose
  .connect(config.mongodb.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB', error)
  })

// CORS 설정
app.use(cors())

// JSON 파싱 설정
app.use(express.json())

// 라우터 설정
app.use('/', postRoutes)

// 서버 실행
app.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}`)
})
