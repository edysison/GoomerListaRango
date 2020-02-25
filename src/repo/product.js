const mongoose = require('mongoose')
const BaseRepo = require('./base')
const ProductSchema = require('../models/product')
const RestaurantSchema = require('../models/restaurant')

class ProductRepo extends BaseRepo {
    async Create(data){
        return await super.Create(data, ProductSchema)
    }
    async VerifyRestaurantID(id){
        try{
            const objId = mongoose.Types.ObjectId(id)
            const data = await RestaurantSchema.findOne({"_id":objId},'name')
            return {data}
        }catch(error){
            return {error}
        }
    }
    async List(id){
        try{
            const objId = mongoose.Types.ObjectId(id)
            const data = await ProductSchema.find({'restaurantID':objId})
            return {data}
        }catch(error){
            return {error}
        }
    }
}

module.exports = new ProductRepo()