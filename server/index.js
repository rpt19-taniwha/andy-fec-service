const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoConnect = require("./database-mongo/database");

let port = process.env.PORT || 8080;

const app = express();

//config to send/receive json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//entry point for server to client
app.use(express.static(path.join(__dirname, "../client/dist")));

//======================================
//Routes and server logic
//======================================

//start server

mongoConnect(result => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });

  console.log(result);
});
