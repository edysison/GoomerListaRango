const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Promotion Schema
module.exports = new Schema({
    opening:{
        type:String,
        required: true
    },
    closing:{
        type:String,
        required: true
    },
    weekday:{
        type:Number,
        required: true
    }
})