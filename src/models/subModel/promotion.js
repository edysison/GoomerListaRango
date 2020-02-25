const mongoose = require('mongoose')
const workdaySchema = require('./workday')

const Schema = mongoose.Schema

// Promotion Schema
module.exports = new Schema({
    description:{
        type: String,
    },
    promoPrice:{
        type: Number,
    },
    worktime: String,
    workingdays:[{type:workdaySchema, ref:'Product'}],
})