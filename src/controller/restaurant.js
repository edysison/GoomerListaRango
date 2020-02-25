const restaurantRepo = require('../repo/restaurant')
const restaurantFormater = require('../services/formater/restaurant')
const restaurantValidator = require('../services/validator/restaurant')

class RestaurantController {
    async Create(req, res){
        let body = req.body

        const validateImage = restaurantValidator.Base64(body.picture)
        if(validateImage.error) return res.status(400).send(validateImage)

        const validateData = restaurantValidator.Workingdays(body.workdays)
        if(validateData.error) return res.status(400).send(validateData)

        body.worktime = restaurantFormater.Workingdays(body.workdays)

        body = restaurantFormater.ToLowerStrings(body)

        const resp = await restaurantRepo.Create(body)
        if(resp.error) return res.status(500).send({error:process.env.SERVER_ERR})

        return res.send(resp)
    }
    async Read(req, res){
        const id = req.params.id

        const validateID = restaurantValidator.ObjectID(id)
        if(validateID.error) return res.status(400).send(validateID)

        const restaurant = await restaurantRepo.Read(id)
        if(!restaurant.data) return res.status(400).send("Id do restaurante e invalido")

        return res.send(restaurant.data)    
    }
    async Update(req, res){
        let body = req.body

        const validateID = restaurantValidator.ObjectID(body._id)
        if(validateID.error) return res.status(400).send(validateID)

        let restaurant = await restaurantRepo.Read(body._id)
        if(!restaurant.data) return res.status(400).send("Id do restaurante e invalido")

        const validateImage = restaurantValidator.Base64(body.picture)
        if(validateImage.error) return res.status(400).send(validateImage)

        const validateData = restaurantValidator.Workingdays(body.workdays)
        if(validateData.error) return res.status(400).send(validateData)

        body.worktime = restaurantFormater.Workingdays(body.workdays)

        body = restaurantFormater.ToLowerStrings(body)

        const todayTime = Date.now
        body = restaurantFormater.FillDate(body, restaurant.data, todayTime)

        const resp = await restaurantRepo.Update(body)
        if(resp.error) return res.status(500).send({error:process.env.SERVER_ERR})

        return res.send(resp.data)
    }
    async Delete(req, res){
        const id = req.params.id

        const validateID = restaurantValidator.ObjectID(id)
        if(validateID.error) return res.status(400).send(validateID)

        const restaurant = await restaurantRepo.Delete(id)
        if(restaurant.data.n == 0) return res.status(400).send({error:"Restaurante nao existe"})

        return res.send(restaurant.data)    
    }
    async PaginateList(req, res){
        const targetPage = req.params.page - 1

        const total = await restaurantRepo.Count()
        if(total.error) return res.status(500).send({error:process.env.SERVER_ERR})
        
        const pages = restaurantFormater.TotalPages(total.data)

        const validate = restaurantValidator.TotalPages(targetPage, pages)
        if(validate.error) return res.status(400).send(validate)

        const itemsToSkip = restaurantFormater.ItemsToSkip(targetPage)

        const resp = await restaurantRepo.List(itemsToSkip)
        if(resp.error) return res.status(500).send({error:process.env.SERVER_ERR})

        return res.send({list:resp.data, pages})
    }
}

module.exports = new RestaurantController()