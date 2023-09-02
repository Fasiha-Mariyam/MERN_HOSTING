const { Schema, model } = require('mongoose')

const BrandsSchema = new Schema({

    BrandName : {
        type: String,
        required: true,
    },
    BrandImage: {
        type: String,
        required: true
    }
    
})
const  Brands = model('brands', BrandsSchema)
module.exports =  Brands 