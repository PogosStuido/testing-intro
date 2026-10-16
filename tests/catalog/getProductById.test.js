const products = require('../../src/data/products');
const {getProductById} = require('../../src/catalog');

describe('getProductById', () => {

  test.each([
    [1, 0], [4, 3], [6, 5]
  ])('ID 1, 4, 6 возвращают products[0], [3], [5]', (id, index) => {
    expect(getProductById(products, id)).toEqual(products[index]);
  })

  test.each([
    0, 999, -1, '1', undefined, NaN
  ])('ID 0, 999, -1, undefined, NaN возвращают null', (id) => {
    expect(getProductById(products, id)).toBeNull()
  })
});
