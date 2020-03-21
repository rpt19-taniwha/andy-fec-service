const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const dbUrl = require("./database-mongo/database.config");
const Product = require("./models/recProducts");

const app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

//=========================================
//API Endpoints
//=========================================
app.get("/youmayalsolike", (req, res) => {
  console.log(req.query);
  Product.findOne(req.query)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

//Start server and db
mongoose
  .connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(client => {
    app.listen(port, () => console.log(`Listening on ${port}...`));
  })
  .catch(err => console.log(err));
