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

        body.worktime = productFormater.Workingdays(body.promotion)

        body = productFormater.ToLowerStrings(body)

        const verifyRestaurant = await productRepo.VerifyRestaurantID(body.restaurantID)
        if(!verifyRestaurant.data) return res.status(400).send({error:'Restaurante invalido'})

        const resp = await productRepo.Create(body)
        if(resp.error) return res.status(500).send({error:process.env.SERVER_ERR})

        return res.send(resp.data)
    }
    async Read(req, res){
        return res.send('resp')
    }
    async Update(req, res){
        return res.send('resp')
    }
    async Delete(req, res){
        return res.send('resp')
    }
}

module.exports = new ProductController()