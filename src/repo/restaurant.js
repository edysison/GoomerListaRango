const RestaurantSchema = require('../models/restaurant')
const BaseRepo = require('./base')

class RestaurantRepo extends BaseRepo {
    async Create(data){
        return await super.Create(data, RestaurantSchema)
    }
    async Read(data){
        return await super.Read(data, RestaurantSchema)
    }
    async Update(data){
        return await super.Update(data, RestaurantSchema)
    }
    async Delete(data){
        return await super.Delete(data, RestaurantSchema)
    }
    async Count(){
        try{
            const data = await RestaurantSchema.countDocuments()
            return {data}
        }catch(error){
            return {error}
        }
    }
    async List(itemsToSkip){
        try{
            const data = await RestaurantSchema.find().skip(itemsToSkip).limit(10)
            return {data}
        }catch(error){
            return {error}
        }
    }
}

module.exports = new RestaurantRepo()