const mongodb = require("mongodb");
const dbUrl = require("./database.config");
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(dbUrl, { useUnifiedTopology: true })
    .then(result => {
      console.log("Connected to MongoDb...");
      callback(result);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;
