// OrderModel.js
const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
    {
        orderId: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
        itemId: {
            type: Number,
            required: true,
        },
        itemName: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
); 
  
const Order = model("Order", orderSchema);

exports.module = Order
  