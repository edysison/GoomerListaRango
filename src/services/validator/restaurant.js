const BaseValidator = require("./base")

class RestaurantValidator extends BaseValidator {
    Base64(image){
        return super.Base64(image)
    }
    Workingdays(days){
        return super.Workingdays(days)
    }
    TotalPages(target, total){
        let error = "Pagina invalida"
        if (target <= total && target >= 0) error = ""
        return {error}
    }
}

module.exports = new RestaurantValidator()