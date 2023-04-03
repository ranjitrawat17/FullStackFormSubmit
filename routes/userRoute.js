const express = require('express')
const route = express.Router()

const { user } = require('../controllers/userController')
route.get('/', user)

module.exports = route;