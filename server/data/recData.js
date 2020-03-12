const productData = require("./productData");

const addRecs = productData => {
  let count = 0;
  const recArr = [];

  while (count < 5) {
    recArr.push(
      productData[Math.floor(Math.random() * Math.floor(productData.length))]
        .productNumber
    );

    count++;
  }

  return recArr;
};

const recData = [];
productData.forEach(product => {
  const recProduct = {};

  product.price = `$${Math.floor(Math.random() * Math.floor(120))}.${Math.floor(
    Math.random() * Math.floor(99)
  )}`;

  product.shipping =
    Math.floor(Math.random() * Math.floor(2)) === 0 ? true : false;
  recProduct.productNumber = product.productNumber;
  recProduct.recProducts = addRecs(productData);

  recData.push(recProduct);
});

module.exports = { recData, productData };
