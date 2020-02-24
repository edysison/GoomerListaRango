const mongoose = require('mongoose')

class BaseRepo {
    async Create(body, Schema){
        try{
            const mountedProd = new Schema(body)
            const data = await mountedProd.save()
            return {data}
        }catch(error){
            return {error}
        }
    }
    async Read(id, Schema){
        try{
            const objId = mongoose.Types.ObjectId(id)
            const data = await Schema.findOne({"_id":objId})
            return {data}
        }catch(error){
            return {error}
        }
    }
}

module.exports = BaseRepo