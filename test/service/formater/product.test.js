const product = require('../../../src/services/formater/product')

describe('Format base function Workingdays', () => {
    const workingdays = [
        {
            opening:"10:00",
            closing:"22:00",
            weekday:0
        },
        {
            opening:"09:00",
            closing:"19:00",
            weekday:1
        },
        {
            opening:"09:00",
            closing:"19:00",
            weekday:2
        },
        {
            opening:"09:00",
            closing:"19:00",
            weekday:3
        },
        {
            opening:"09:00",
            closing:"19:00",
            weekday:4
        },
        {
            opening:"10:00",
            closing:"22:00",
            weekday:5
        },
        {
            opening:"10:00",
            closing:"22:00",
            weekday:6
        }
    ]
    const promotion = {
        promoPrice:100,
        description:'Uma descricao valida',
        workingdays
    }
    let newData = {...promotion}
    it('All days data', () => {
        expect(product.Workingdays(newData)).toStrictEqual(
            "De Segunda a Quinta das 09:00 ate as 19:00 e de Sexta a Domingo das 10:00 ate as 22:00"
        )
    })
    it('Hole in data', () => {
        newData = {...promotion}
        newData.workingdays.splice(3,2)
        expect(product.Workingdays(newData)).toStrictEqual(
            "De Segunda a Terca das 09:00 ate as 19:00 e de Sexta a Domingo das 10:00 ate as 22:00"
        )
    })
    it('One day data', () => {
        newData = {...promotion}
        newData.workingdays = newData.workingdays.slice(1,2)
        expect(product.Workingdays(newData)).toStrictEqual(
            "De Segunda das 09:00 ate as 19:00"
        )
    })
    it('No data', () => {
        expect(product.Workingdays()).toStrictEqual("")
    })
})

describe('Format function ToLowerStrings', () => {
    const data = {
        name:"Bob Ross",
        category:"Paradise Land",
        promotion:{
            description:"Painting ThE boaRd wiTh Serenity"
        }
    }
    it('Normal data', () => {
        let newData = {...data}
        expect(product.ToLowerStrings(newData)).toStrictEqual({
            name:"bob ross",
            category:"paradise land",
            promotion:{
                description:"painting the board with serenity"
            }
        })
    })
})