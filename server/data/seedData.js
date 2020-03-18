const data = require("./recData");
const Product = require("../models/recProducts");

module.exports = Product.countDocuments({})
  .then(docs => {
    if (docs === 0) {
      Product.create(data, (err, products) => {
        if (err) {
          console.log(err);
        } else {
          console.log(products);
        }
      });
    }
  })
  .catch(err => {
    console.log(err);
  });
