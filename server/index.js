const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbUrl = require("./database-mongo/database.config");

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

//start server

mongoose
  .connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(result => {
    app.listen(port, () => console.log(`Listening on ${port}...`));
    console.log(result);
  })
  .catch(err => console.log(err));
