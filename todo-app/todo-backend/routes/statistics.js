const express = require('express')
const router = express.Router()
const redis = require('../redis')

/* GET statistics */
router.get('/', async (req, res) => {
  redis.getAsync('todos_counter').then((reply) => {
    if (!reply) {
      reply = 0
    }
    res.send({
      added_todos: parseInt(reply),
    })
  })
})

module.exports = router
