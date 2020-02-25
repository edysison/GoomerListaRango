const BaseValidator = require("./base")

class ProductValidator extends BaseValidator {
    Base64(image){
        return super.Base64(image)
    }
    ObjectID(id){
        return super.ObjectID(id)
    }
    Promotion(promo, totalValue){
        if(typeof promo == 'undefined') return {error:''}
        if(typeof promo.description != 'string') return {error:'Descricao da promocao invalida'}
        if(typeof promo.promoPrice != 'number' || promo.promoPrice >= totalValue) return {error:'Valor do desconto invalido'}
        if(typeof promo.workingdays != 'undefined') return super.Workingdays(promo.workingdays)
        return {error:'Dados de promocao invalidos'}
    }
    Price(value){
        const error = typeof value == 'number' && value > 0 ? '' : 'Valor invalido'
        return {error}
    }
}

module.exports = new ProductValidator()