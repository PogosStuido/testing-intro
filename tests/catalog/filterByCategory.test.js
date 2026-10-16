const products = require('../../src/data/products');
const {filterByCategory} = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, 'all')).toEqual(products)
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, '')).toEqual(products)
  })

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, undefined)).toEqual(products)
  })

  test("'books' возвращает товары с ID [3, 6]", () => {
    expect(filterByCategory(products, 'books')).toEqual([
      expect.objectContaining({id: 3, category: 'books'}),
      expect.objectContaining({id: 6, category: 'books'})
    ])
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    expect(filterByCategory(products, 'home')).toEqual([
      expect.objectContaining({id: 4, category: 'home'}),
      expect.objectContaining({id: 5, category: 'home'})
    ])
  })

  test("'clothes' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'clothes')).toEqual([]);
  })

  test("'toys' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'toys')).toEqual([]);

  })

  test("'sports' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'sports')).toEqual([]);
  })

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    expect(filterByCategory(products, 'electronics')).toEqual([
      expect.objectContaining({id: 1, category: 'electronics'}),
      expect.objectContaining({id: 2, category: 'electronics'})
    ]);
  })
});
