const data = require("./recData");
const mongoose = require("mongoose");
const Product = require("../models/recProducts");
const dbUrl = require("../database-mongo/database.config");

mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.on("open", () => {
  db.dropDatabase(function(err, result) {
    console.log("collection dropped");
  });
});

db.once("open", () => {
  console.log("db connected...");
  Product.countDocuments({})
    .then(docs => {
      if (docs === 0) {
        Product.create(data, (err, products) => {
          if (err) {
            console.log("error", err);
          } else {
            console.log(products);
          }
        });
      }
      console.log("Database created!");
    })
    .catch(err => {
      console.log(err);
    });
});
