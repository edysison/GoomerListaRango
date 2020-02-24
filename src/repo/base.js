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
}

module.exports = BaseRepo