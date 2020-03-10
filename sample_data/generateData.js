const productData = require("./sample_data");

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

  recProduct.productNumber = product.productNumber;
  recProduct.recProducts = addRecs(productData);

  recData.push(recProduct);
});

module.exports = recData;
