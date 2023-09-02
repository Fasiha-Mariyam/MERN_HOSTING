const { Schema, model } = require('mongoose')

const OrderSchema = new Schema(
    {
        customerName: {
            type: String,
            required: true,
        },
        customerEmail: {
            type: String,
            required: true,
        },
        customerId: {
            type: String,
            required: true,
        },
        customerContact: {
            type: String,
            required: true,
        },
        customerAddress: {
            type: String,
            required: true,
        },
        order: {
            type: Array,
            required: true,
        },
        order_at: {
            type: Date,
            default: Date.now
        }
    }
)

const Order = model('order', OrderSchema)
module.exports = Order 