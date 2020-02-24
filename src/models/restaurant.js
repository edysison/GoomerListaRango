const mongoose = require('mongoose')
const workdaySchema = require('./subModel/workday')

const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
    picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    workdays: [{type:workdaySchema, ref:'Restaurant'}],
    worktime:String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);