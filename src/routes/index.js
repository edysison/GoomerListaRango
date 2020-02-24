const express = require('express')
const baseRouter = require('./base')

const restaurantRoutes = require('./custom/restaurant')
const restaurantController = require('../controller/restaurant')

var routes = express.Router();

routes = baseRouter(routes, 'restaurant', restaurantController, restaurantRoutes)

module.exports = routes