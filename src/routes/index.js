const express = require('express')
const baseRouter = require('./base')

const restaurantRoutes = require('./custom/restaurant')
const restaurantController = require('../controller/restaurant')

const productRoutes = require('./custom/product')
const productController = require('../controller/product')

var routes = express.Router();

routes = baseRouter(routes, 'restaurant', restaurantController, restaurantRoutes)
routes = baseRouter(routes, 'product', productController, productRoutes)

module.exports = routes