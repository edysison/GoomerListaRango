const product = require('../../../src/services/validator/product')

describe('Validating base function Base64', () => {
    it('Valid data', () => {
        const image = "data:image/jpeg;base64,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"
        expect(product.Base64(image)).toStrictEqual({error:""})
    })
    it('Invalid data', () => {
        expect(product.Base64("not an base64 image")).toStrictEqual({error:"Formato da imagem invalida"})
    })
})

describe('Valid base function ObjectID', () => {
    it('Valid data', () => {
        expect(product.ObjectID("5e517ea30f67170011fba84f")).toStrictEqual({error:""})
    })
    it('Invalid data', () => {
        expect(product.ObjectID("not an object id")).toStrictEqual({error:"ID e invalido"})
    })
})

describe('Valid function Price', () => {
    it('Valid data', () => {
        expect(product.Price(555)).toStrictEqual({error:""})
    })
    it('Invalid data', () => {
        expect(product.Price("R$ 654,54")).toStrictEqual({error:"Valor invalido"})
    })
})

describe('Valid function Promotion', () => {
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
    const promo = {
        description:'Working all fine',
        promoPrice:70,
        workingdays
    }
    const totalValue = 100
    let newData = {...promo}
    it('Valid data', () => {
        expect(product.Promotion(newData, totalValue)).toStrictEqual({error:""})
    })
    it('Valid no data', () => {
        expect(product.Promotion(undefined, totalValue)).toStrictEqual({error:""})
    })
    it('Invalid data', () => {
        newData = {...promo}
        newData.description = 4354
        expect(product.Promotion(newData, totalValue)).toStrictEqual({error:"Descricao da promocao invalida"})
    })
    it('Invalid data', () => {
        newData = {...promo}
        newData.promoPrice = "totalValue"
        expect(product.Promotion(newData, totalValue)).toStrictEqual({error:"Valor do desconto invalido"})
    })
    it('Invalid data', () => {
        newData = {...promo}
        newData.promoPrice = totalValue
        expect(product.Promotion(newData, totalValue)).toStrictEqual({error:"Valor do desconto invalido"})
    })
    it('Invalid data', () => {
        newData = {...promo}
        newData.promoPrice = totalValue + 1
        expect(product.Promotion(newData, totalValue)).toStrictEqual({error:"Valor do desconto invalido"})
    })
    it('Invalid duplicate day', () => {
        newData = {...promo}
        newData.workingdays[6] = {
            opening:"09:00",
            closing:"19:00",
            weekday:0
        }
        expect(product.Promotion(newData, totalValue)).toStrictEqual({error:"Apenas 1 registro por dia da semana"})
    })
    it('Invalid opening time', () => {
        newData = {...promo}
        newData.workingdays[0].opening = "29:00"
        expect(product.Promotion(newData, totalValue)).toStrictEqual({error:"Horario invalido"})
    })
    it('Invalid closing time', () => {
        newData = {...promo}
        newData.workingdays[0].closing = "1:40"
        expect(product.Promotion(newData, totalValue)).toStrictEqual({error:"Horario invalido"})
    })
    it('Invalid day range', () => {
        newData = {...promo}
        newData.workingdays[0] = {
            opening:"09:00",
            closing:"19:00",
            weekday:7
        }
        expect(product.Promotion(newData, totalValue)).toStrictEqual({error:"Dia invalido"})
    })
    it('Invalid data', () => {
        newData = {...promo}
        newData.workingdays = undefined 
        expect(product.Promotion(newData, totalValue)).toStrictEqual({error:"Dados de promocao invalidos"})
    })
})