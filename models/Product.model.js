// ProductModel.js
const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description:{
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
      default: 'images/default-ProductImg.jpg'
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
  