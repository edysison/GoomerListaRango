const productRepo = require('../repo/product')
const productFormater = require('../services/formater/product')
const productValidator = require('../services/validator/product')

class ProductController {
    async Create(req, res){
        let body = req.body

        const validateID = productValidator.ObjectID(body.restaurantID)
        if(validateID.error) return res.status(400).send(validateID)

        const validatePrice = productValidator.Price(body.price)
        if(validatePrice.error) return res.status(400).send(validatePrice)

        const validatePromotion = productValidator.Promotion(body.promotion, body.price)
        if(validatePromotion.error) return res.status(400).send(validatePromotion)

        const validateImage = productValidator.Base64(body.picture)
        if(validateImage.error) return res.status(400).send(validateImage)

        body.promotion.worktime = productFormater.Workingdays(body.promotion)

        body = productFormater.ToLowerStrings(body)

        const verifyRestaurant = await productRepo.VerifyRestaurantID(body.restaurantID)
        if(!verifyRestaurant.data) return res.status(400).send({error:'Restaurante invalido'})

        const resp = await productRepo.Create(body)
        if(resp.error) return res.status(500).send({error:process.env.SERVER_ERR})

        return res.send(resp.data)
    }
    async Read(req, res){
        const id = req.params.id

        const validateID = productValidator.ObjectID(id)
        if(validateID.error) return res.status(400).send(validateID)

        const product = await productRepo.Read(id)
        if(!product.data) return res.status(400).send("Produto invalido")

        return res.send(product.data)    
    }
    async Update(req, res){
        let body = req.body

        const validateID = productValidator.ObjectID(body._id)
        if(validateID.error) return res.status(400).send(validateID)

        const validateRestaurantID = productValidator.ObjectID(body.restaurantID)
        if(validateRestaurantID.error) return res.status(400).send(validateRestaurantID)

        const validatePrice = productValidator.Price(body.price)
        if(validatePrice.error) return res.status(400).send(validatePrice)

        const validatePromotion = productValidator.Promotion(body.promotion, body.price)
        if(validatePromotion.error) return res.status(400).send(validatePromotion)

        const validateImage = productValidator.Base64(body.picture)
        if(validateImage.error) return res.status(400).send(validateImage)

        body.promotion.worktime = productFormater.Workingdays(body.promotion)

        body = productFormater.ToLowerStrings(body)

        const verifyRestaurant = await productRepo.VerifyRestaurantID(body.restaurantID)
        if(!verifyRestaurant.data) return res.status(400).send({error:'Restaurante invalido'})

        const product = await productRepo.Read(body._id)
        if(!product.data) return res.status(400).send("Produto invalido")

        const todayTime = Date.now
        body = productFormater.FillDate(body, product.data, todayTime)

        const resp = await productRepo.Update(body)
        if(resp.error) return res.status(500).send({error:process.env.SERVER_ERR})

        return res.send(resp.data)
    }
    async Delete(req, res){
        const id = req.params.id

        const validateID = productValidator.ObjectID(id)
        if(validateID.error) return res.status(400).send(validateID)

        const product = await productRepo.Delete(id)
        if(product.data.n == 0) return res.status(400).send({error:"Produto nao existe"})

        return res.send(product.data)
    }
    async List(req, res){
        const id = req.params.id

        const verifyRestaurant = await productRepo.VerifyRestaurantID(id)
        if(!verifyRestaurant.data) return res.status(400).send({error:'Restaurante invalido'})

        const resp = await productRepo.List(id)
        if(resp.error) return res.status(500).send({error:process.env.SERVER_ERR})

        return res.send(resp.data)
    }
}

module.exports = new ProductController()