const products = require('../../src/data/products');
const {searchProducts} = require('../../src/catalog');

describe('searchProducts', () => {
  test.each([
    ['Наушники', 1],
    ['Чистый код', 6],
    ['Настольная лампа', 4],
  ])('Товар возвращает товар с его ID', (query, expectedId) => {
    expect(searchProducts(products, query)).toEqual([
      expect.objectContaining({
        id: expectedId,
        name: query,
      })
    ])
  })

  test.each([
    '', ''.trim(), '\t\n'
  ])("пустая строка, строка из пробелов и '\\t\\n' возвращают товары с ID [1, 2, 3, 4, 5, 6]", (query) => {
    expect(searchProducts(products, query)).toEqual(products);
  });

  test.each([
    ['javascript', 3, 'JavaScript для начинающих'],
    ['наушники', 1, 'Наушники'],
    ['ЧЕХОЛ', 5, 'Чехол для ноутбука'],
  ])(`'javascript' возвращает товар с ID 3,
      'наушники' возвращает товар с ID 1,
       'ЧЕХОЛ' возвращает товар с ID 5`, (query, expectedId, expectedName) => {
    expect(searchProducts(products, query)).toEqual([
      expect.objectContaining({
        id: expectedId,
        name: expectedName,
      })
    ])
  })
});
