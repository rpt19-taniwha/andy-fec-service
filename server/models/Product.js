const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  productNumber: {
    type: Number,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  sellerName: {
    type: String,
    required: true
  },
  shipping: {
    type: Boolean,
    required: false
  },
  catagory: {
    type: String,
    required: false
  },
  metaData: {
    type: [String],
    required: false
  },
  recProducts: {
    type: [Object],
    required: true
  }
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;
