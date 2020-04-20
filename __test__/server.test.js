const request = require('request');

describe('Server endpoint /products', () => {
  const requestMethodAndUrl = {
    method: 'GET',
    url: 'http://127.0.0.1:8081/products/549504785'
  };

  it('GET /products/:productNumber should return 200', (done) => {
    request(requestMethodAndUrl, (err, response) => {
      console.log(response.statusCode);
      if (err) {
        throw err;
      } else {
        expect(response.statusCode).toEqual(200);
        done();
      }
    });
  });

  it('GET /products/:productNumber should return correct key/value pairs and data types', (done) => {
    request(requestMethodAndUrl, (err, response, body) => {
      if (err) {
        throw err;
      } else {
        const data = JSON.parse(body);
        expect(data).toHaveProperty('productName');
        expect(data).toHaveProperty('price');
        expect(data).toHaveProperty('picture');
        expect(data).toHaveProperty('sellerName');
        expect(data).toHaveProperty('shipping');
        expect(data).toHaveProperty('catagory');
        expect(data).toHaveProperty('metaData');
        expect(data).toHaveProperty('recProducts');

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
