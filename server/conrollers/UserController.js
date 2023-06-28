const User = require('../models/User')

const UserController = {
  registerUser: async (req, res) => {
    async function getNextUserId() {
      const lastUser = await User.findOne({}, {}, {sort: {userId: -1}})
      return lastUser ? lastUser.userId + 1 : 0
    }
    try {
      const user = new User(req.body)
      user.userId = await getNextUserId()
      //result, isSuccess, code, message
      await user.save()
      res.status(201).send({
        result: user,
        isSuccess: true,
        code: 201,
        message: 'User successfully created',
      })
    } catch (error) {
      res.status(400).send({
        result: null,
        isSuccess: false,
        code: 400,
        message: 'Failed to create user',
        error: error.message,
      })
    }
  },
  loginUser: async (req, res) => {
    try {
      const userId = req.body.userId
      const user = await User.findOne({userId: userId})

      if (!user) {
        res.status(404).send({
          result: null,
          isSuccess: false,
          code: 404,
          message: 'User not found',
        })
        return
      }

      res.status(200).send({
        result: user,
        isSuccess: true,
        code: 200,
        message: 'Get User successfully',
      })
    } catch (error) {
      res.status(400).send({
        result: null,
        isSuccess: false,
        code: 400,
        message: 'Failed to get user',
        error: error.message,
      })
    }
  },

  // Get a user by ID
  logOutUser: async (req, res) => {
    try {
      const user = await User.findOne({userId: req.params.id})
      if (!user) return res.status(404).send()
      res.send(user)
    } catch (error) {
      res.status(500).send(error)
    }
  },

  // Delete a user by ID
  deleteUser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({userId: req.params.id})
      if (!user) {
        return res.status(404).send()
      }
      res.send(user)
    } catch (error) {
      res.status(500).send(error)
    }
  },
}

module.exports = UserController
