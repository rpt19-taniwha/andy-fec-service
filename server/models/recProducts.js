const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productNumber: {
    type: String,
    required: true
  },
  recProducts: {
    type: [String],
    required: false
  }
});

module.exports = mongoose.model("Product", productSchema);
