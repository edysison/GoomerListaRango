const BaseValidator = require("./base")

class RestaurantValidator extends BaseValidator {
    Base64(image){
        return super.Base64(image)
    }
    Workingdays(days){
        return super.Workingdays(days)
    }
}

module.exports = new RestaurantValidator()