const mongoose = require('mongoose');
const data = require('./serviceData');
const Product = require('../../models/Product');
const url = require('../config/database.config')

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.connection.collections['products'].drop();

Product.insertMany(data, function (error, docs) {
  if (error) {
    console.log('Error seeding database');
  } else {
    console.log('Successfully seeded database');
    mongoose.connection.close();
  }
});
