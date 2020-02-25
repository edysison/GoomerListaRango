const BaseFormater = require("./base")

class ProductFormater extends BaseFormater {
    Workingdays(promotion){
        return typeof promotion == 'undefined' ? '' : super.Workingdays(promotion.workingdays)
    }
    FillDate(body, restaurant, date){
        return super.FillDate(body, restaurant, date)
    }
    ToLowerStrings(body){
        body.name = body.name.toLowerCase()
        body.category = body.category.toLowerCase()
        if(typeof body.promotion != 'undefined'){
            body.promotion.description = body.promotion.description.toLowerCase()
        }
        return body
    }
}

module.exports = new ProductFormater()