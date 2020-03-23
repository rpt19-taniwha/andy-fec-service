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

module.exports = mongoose.model('Product', productSchema);
/*
Prduct Schema
{
	productNumber: Number,
	productName: String,
	productPrice: String,
	productPicture: String(Url),
	sellerName: String,
  shipping: Boolean,
  productCatagory: String,
	metaData: [String],
	recProducts: [Product]
}
*/
