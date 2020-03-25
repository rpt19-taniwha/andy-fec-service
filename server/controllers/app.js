const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
// const db = require('../database-mongo/index');
const Product = require('../models/Product');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

//  API Endpoints

app.get('/youmayalsolike/:productId', (req, res) => {
  const productId = parseInt(req.params.productId, 10);

  Product.findOne({ productNumber: productId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = app;
