const loremPicsum = require('lorem-picsum');
const faker = require('faker');
const productData = require('./productData');

const getRandomProduct = (productNumber) => {
  let randomProductNumber;
  const bool = true;

  while (bool) {
    const randomNum = Math.floor(
      Math.random() * Math.floor(productData.length)
    );
    randomProductNumber = productData[randomNum].productNumber;
    if (randomProductNumber !== productNumber) return productData[randomNum];
  }

  return null;
};

const addRecs = (productNumber) => {
  let count = 0;
  const recArr = [];

  while (count < 5) {
    recArr.push(getRandomProduct(productNumber));

    count += 1;
  }

  return recArr;
};

const serviceDummyData = () => {
  const recData = [];

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
    serviceProduct.recProducts = addRecs(product.productNumber);

    recData.push(serviceProduct);
  });

  return recData;
};

module.exports = serviceDummyData();

/*
Prduct Schema
{
	productNumber: Number,
	productName: String,
	productPrice: String,
	productPicture: String(Url),
	sellerName: String,
  shipping: Boolean,
  productCatagory: String,
	metaData: [String],
	recProducts: [Product]
}
*/
