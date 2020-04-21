const mongoose = require('mongoose');
const Product = require('../server/models/Product');

// eslint-disable-next-line node/no-unpublished-require
const dbUrl = require('../server/database-mongo/config/database.config');

mongoose.connect(dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

describe('Database product keys', () => {
  it('should return Product object with model keys', (done) => {
    Product.find({ productNumber: 549504785 }, (err, result) => {
      if (err) {
        throw err;
      } else {
        const data = result[0];

        expect(data).toHaveProperty('productName');
        expect(data).toHaveProperty('price');
        expect(data).toHaveProperty('picture');
        expect(data).toHaveProperty('sellerName');
        expect(data).toHaveProperty('shipping');
        expect(data).toHaveProperty('catagory');
        expect(data).toHaveProperty('metaData');
        expect(data).toHaveProperty('recProducts');

        done();
      }
    });

  });
  it('should return Product object with correct value data types', (done) => {
    Product.find({ productNumber: 549504785 }, (err, result) => {
      if (err) {
        throw err;
      } else {
        const data = result[0];

        expect(typeof data.productName).toBe('string');
        expect(typeof data.price).toBe('string');
        expect(typeof data.picture).toBe('string');
        expect(typeof data.sellerName).toBe('string');
        expect(typeof data.shipping).toBe('boolean');
        expect(typeof data.catagory).toBe('string');
        expect(Array.isArray(data.metaData)).toBe(true);
        expect(Array.isArray(data.recProducts)).toBe(true);

        done();
      }
    });
  });
});
