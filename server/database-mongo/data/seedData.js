const mongoose = require('mongoose');
const data = require('./serviceData');
const Product = require('../../models/Product');

// eslint-disable-next-line node/no-unpublished-require
const dbUrl = require('../config/database.config');
const localDbUrl = 'mongodb://localhost/recProducts';
const url = dbUrl || localDbUrl;

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
  }
});
