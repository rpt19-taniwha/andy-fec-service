/* eslint-disable no-param-reassign */
const loremPicsum = require('lorem-picsum');
const faker = require('faker');
const productData = require('./productData');

//  global variable that is exported
const serviceProducts = [];

// helpers
const getRandomServiceProduct = (productNumber) => {
  let randomProductNumber;
  const bool = true;

  while (bool) {
    const recItem = {};
    const randomNum = Math.floor(
      Math.random() * Math.floor(serviceProducts.length)
    );
    randomProductNumber = serviceProducts[randomNum].productNumber;
    if (randomProductNumber !== productNumber) {
      recItem.productNumber = serviceProducts[randomNum].productNumber;
      recItem.productName = serviceProducts[randomNum].productName;
      recItem.price = serviceProducts[randomNum].price;
      recItem.picture = serviceProducts[randomNum].picture;
      recItem.sellerName = serviceProducts[randomNum].sellerName;
      recItem.shipping = serviceProducts[randomNum].shipping;
      recItem.catagory = serviceProducts[randomNum].catagory;
      recItem.metaData = serviceProducts[randomNum].metaData;
      return recItem;
    }
  }

  return null;
};

const addRecs = (productNumber) => {
  let count = 0;
  const recArr = [];

  while (count < 5) {
    recArr.push(getRandomServiceProduct(productNumber));
    count += 1;
  }

  return recArr;
};

// convert product data to service data
(() => {
  productData.forEach((product) => {
    const serviceProduct = {};
    serviceProduct.productNumber = product.productNumber;
    serviceProduct.productName = product.productName;
    serviceProduct.price = `$ ${faker.commerce.price()}`;
    serviceProduct.picture = loremPicsum({ width: 200 });
    serviceProduct.sellerName = faker.internet.userName();
    serviceProduct.shipping = faker.random.boolean();
    serviceProduct.catagory = product.productCategory;
    serviceProduct.metaData = product.versions.style[0].metaData;
    serviceProducts.push(serviceProduct);
  });

  serviceProducts.forEach((serviceProduct) => {
    serviceProduct.recProducts = addRecs(serviceProduct.productNumber);
  });

  return null;
})();

// console.log(serviceProducts[0].recProducts);

module.exports = serviceProducts;
