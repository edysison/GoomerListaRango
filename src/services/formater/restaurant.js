const BaseFormater = require("./base")

class RestaurantFormater extends BaseFormater {
    constructor(){
        super()
        this.itemsPerPage = 10
    }
    Workingdays(workingdays){
        return super.Workingdays(workingdays)
    }
    toLowerStrings(body){
        body.name = body.name.toLowerCase()
        body.address = body.address.toLowerCase()
        return body
    }
    ItemsToSkip(page){
        return page * this.itemsPerPage
    }
    TotalPages(count){
        return Math.ceil(count / this.itemsPerPage)
    }
}

module.exports = new RestaurantFormater()