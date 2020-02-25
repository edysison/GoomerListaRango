const mongoose = require('mongoose')
const promotionSchema = require('./subModel/promotion')

const Schema = mongoose.Schema

// Main Schema
const ProductSchema = new Schema({
    restaurantID: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    promotion: {type:promotionSchema, ref:'Product'},
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);