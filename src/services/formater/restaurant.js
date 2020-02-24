const BaseFormater = require("./base")

class RestaurantFormater extends BaseFormater {
    Workingdays(workingdays){
        return super.Workingdays(workingdays)
    }
    toLowerStrings(body){
        body.name = body.name.toLowerCase()
        body.address = body.address.toLowerCase()
        return body
    }
}

module.exports = new RestaurantFormater()