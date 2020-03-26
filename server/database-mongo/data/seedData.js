const mongoose = require('mongoose');
const data = require('./serviceData');

const Product = require('../../models/Product');
// eslint-disable-next-line node/no-unpublished-require
const dbUrl = require('../config/database.config');

mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', () => {
  db.dropDatabase(() => {
    console.log('collection dropped');
  });
});

db.once('open', () => {
  console.log('db connected...');
  Product.countDocuments({})
    .then((docs) => {
      if (docs === 0) {
        Product.create(data, (err, products) => {
          if (err) {
            console.log('error', err);
          } else {
            console.log('Database created!');
            db.close();
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
