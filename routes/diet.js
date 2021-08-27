const express = require('express')
const router = express.Router()

// middlewares
const { authCheck, adminCheck } = require('../middlewares/auth')

// controller
const {
  create,
  read,
  update,
  remove,
  list
} = require('../controllers/diet')

// routes
router.post('/diet', authCheck, adminCheck, create)
router.get('/diets', list)
router.get('/diet/:slug', read)
router.put('/diet/:slug', authCheck, adminCheck, update)
router.delete('/diet/:slug', authCheck, adminCheck, remove)

module.exports = router
