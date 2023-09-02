const { Schema, model } = require('mongoose')

const ProductSchema = new Schema
(
    {
    ProductName: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    BrandName: {
        type: String,
        required: true,
    },
    CategoryName: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Rating: {
        type: Number,
        required: true,
    },
    Image: {
        type: String,
        required: true
    }
  }
)
const Product = model('product', ProductSchema)
module.exports = Product