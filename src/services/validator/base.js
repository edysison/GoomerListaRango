const mongoose = require('mongoose')
const isBase64 = require('is-base64')

class BaseValidator {
    Base64(image){
        let error = "Formato da imagem invalida"
        if(isBase64(image, {allowMime: true,allowEmpty: false}))
            error = ""
        return {error}
    }
    ObjectID(id){
        let error = "ID e invalido"
        if(mongoose.isValidObjectId(id)) error = ""
        return {error}
    }
    Workingdays(days){
        let error = ''
        const regex = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/

        // ordena por dia da semana para facilitar a validacao
        days = days.sort((a, b)=> a.weekday - b.weekday )
        // Proibe entrada de mais do que o total de dias da semana
        days.length > 7 ? error = 'Dias em excesso' : ''

        for (let i = 0; i < days.length; i++) {
            // Permite apenas 1 horario por dia da semana
            if(i+1 < days.length) days[i].weekday == days[i+1].weekday ? error = 'Apenas 1 registro por dia da semana' : ''
            // Confere o formato das horas
            error = this._timeFormat(regex, days, i, error)                      
            // confere se o dia e valido
            error = this._weekday(days[i], error)
        }
        return {error}
    }
    _timeFormat(regex, days, count, error){
        if(regex.test(days[count].opening) && regex.test(days[count].closing)){
            let opening = days[count].opening.slice(-2)
            let closing = days[count].closing.slice(-2)
            parseInt(opening) % 15 == 0 && parseInt(closing) % 15 == 0 ? '' : error = 'Horario invalido'
        }else{
            error = 'Horario invalido'
        }
        return error
    }
    _weekday(days, error){
        days.weekday % 1 == 0 && (days.weekday >= 0 && days.weekday <= 6) ? '' : error = 'Dia invalido'
        return error
    }
}

module.exports = BaseValidator