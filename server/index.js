//Express setup
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//Mongo/mongoose setup
const mongoose = require("mongoose");
const dbUrl = require("./database-mongo/database.config");
const Product = require("./models/recProducts");

const app = express();
let port = process.env.PORT || 8080;

//config to send/receive json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//entry point for server to client
app.use(express.static(path.join(__dirname, "../client/dist")));

//======================================
//Routes and server logic
//======================================

app.get("/youmayalsolike", (req, res) => {
  Product.findOne(req.body)
    .then(data => {
      res.send(data.recProducts);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

//start server and db
mongoose
  .connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(result => {
    app.listen(port, () => console.log(`Listening on ${port}...`));
  })
  .catch(err => console.log(err));
