const mongoose = require('mongoose');
const data = require('./serviceData');
const Product = require('../../models/Product');

// eslint-disable-next-line node/no-unpublished-require
const url = 'mongodb+srv://root:root@recservicedata-3vond.mongodb.net/test?retryWrites=true&w=majority';

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
