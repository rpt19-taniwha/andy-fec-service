const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const Product = require('../models/Product');
// const cacheData = require('../database-mongo/data/sampleData');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/dist')));

//  API Endpoints

app.get('/listing/:productNumber', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../client/dist'),
  });
});

app.get('/products/:productNumber', (req, res) => {
  const productNumber = parseInt(req.params.productNumber, 10);

  // res.send(JSON.stringify(cacheData))

  Product.findOne({ productNumber })
    .then((data) => {
      console.log('from line 105')
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = app;
