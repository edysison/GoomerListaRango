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

        body = restaurantFormater.toLowerStrings(body)

        const resp = await restaurantRepo.Create(body)
        if(resp.error) return res.status(500).send({error:process.env.SERVER_ERR})

        return res.send(resp)
    }
}

module.exports = new RestaurantController()