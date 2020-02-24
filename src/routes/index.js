const express = require('express')
const baseRouter = require('./base')

const restaurantController = require('../controller/restaurant')

var routes = express.Router();

routes = baseRouter(routes, 'restaurant', restaurantController)

module.exports = routes