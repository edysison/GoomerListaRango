const restaurant = require('../../../src/services/formater/restaurant')

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
    let newData = [...workingdays]
    it('All days data', () => {
        expect(restaurant.Workingdays(newData)).toStrictEqual(
            "De Segunda a Quinta das 09:00 ate as 19:00 e de Sexta a Domingo das 10:00 ate as 22:00"
        )
    })
    it('Hole in data', () => {
        newData = [...workingdays]
        newData.splice(3,2)
        expect(restaurant.Workingdays(newData)).toStrictEqual(
            "De Segunda a Terca das 09:00 ate as 19:00 e de Sexta a Domingo das 10:00 ate as 22:00"
        )
    })
    it('One day data', () => {
        newData = [...workingdays]
        newData = newData.slice(1,2)
        expect(restaurant.Workingdays(newData)).toStrictEqual(
            "De Segunda das 09:00 ate as 19:00"
        )
    })
})

describe('Format base function FillDate', () => {
    const data = {
        created:"2020-02-24T06:45:00.316Z",
        updated:"2020-02-24T06:45:00.316Z",
    }
    let newData = {...data}
    let time = '2020-02-24T07:13:02.034Z'
    it('Normal data', () => {
        newData = {...data}
        newData.created = '2020-02-24T07:10:14.230Z'
        expect(restaurant.FillDate(data, newData, time)).toStrictEqual({
            created:"2020-02-24T07:10:14.230Z",
            updated:"2020-02-24T07:13:02.034Z",
        })
    })
})

describe('Format function ToLowerStrings', () => {
    const data = {
        name:"Bob Ross",
        address:"Paradise Land",
    }
    it('Normal data', () => {
        let newData = {...data}
        expect(restaurant.ToLowerStrings(newData)).toStrictEqual({
            name:"bob ross",
            address:"paradise land",
        })
    })
})

describe('Format function TotalPages', () => {
    it('Valid data', () => {
        expect(restaurant.TotalPages(11, 2)).toStrictEqual(2)
    })
})

describe('Format function ItemsToSkip', () => {
    it('Valid data', () => {
        expect(restaurant.ItemsToSkip(4)).toStrictEqual(40)
    })
})