const Schema = require('../models/restaurant')
const BaseRepo = require('./base')

class RestaurantRepo extends BaseRepo {
    async Count(){
        try{
            const data = await Schema.countDocuments()
            return {data}
        }catch(error){
            return {error}
        }
    }
    async List(itemsToSkip){
        try{
            const data = await Schema.find().skip(itemsToSkip).limit(10)
            return {data}
        }catch(error){
            return {error}
        }
    }
    async Create(data){
        return await super.Create(data, Schema)
    }
    async Read(data){
        return await super.Read(data, Schema)
    }
    async Update(data){
        return await super.Update(data, Schema)
    }
    async Delete(data){
        return await super.Delete(data, Schema)
    }
}

module.exports = new RestaurantRepo()