const Schema = require('../models/restaurant')
const BaseRepo = require('./base')

class RestaurantRepo extends BaseRepo {
    async Create(data){
        return await super.Create(data, Schema)
    }
}

module.exports = new RestaurantRepo()