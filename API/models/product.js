const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name must be provided!"],
    },
    price: {
      type: Number,
      required: [true, "Product price must be provided"],
    },
    productImage: {
      type: String,
      imageUrl: String,
      required: [true, "Product image must be required!"],
    },

    category: String,
  },
  { timestamps: true }
);

const ProductModel = model("Product", productSchema);

module.exports = ProductModel;
