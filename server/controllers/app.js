const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
// const db = require('../database-mongo/index');
const Product = require('../models/Product');

const app = express();
app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST', 'PUT');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

//  API Endpoints

app.get('/youmayalsolike/:productNumber', (req, res) => {
  const productNumber = parseInt(req.params.productNumber, 10);

  Product.findOne({ productNumber })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = app;
