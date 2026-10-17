const products = require('../../src/data/products');
const {sortProductsByPrice} = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test.each(['', 'asc'])("все товары c 'asc' и без направления сортируются как [3, 6, 5, 4, 2, 1]", (direction) => {
    expect(sortProductsByPrice(products, direction)).toEqual([expect.objectContaining({id: 3}), expect.objectContaining({id: 6}), expect.objectContaining({id: 5}), expect.objectContaining({id: 4}), expect.objectContaining({id: 2}), expect.objectContaining({id: 1}),])
  })

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const catalog = [
      {id: 1, price: 49900},
      {id: 3, price: 18900},
      {id: 4, price: 27900}
    ]
    expect(sortProductsByPrice(catalog, "asc")).toEqual([
      expect.objectContaining({id: 3, price: 18900}),
      expect.objectContaining({id: 4, price: 27900}),
      expect.objectContaining({id: 1, price: 49900}),
    ])
  })

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const catalog = [
      {id: 3, price: 18900},
      {id: 1, price: 49900},
      {id: 4, price: 27900}
    ];
    expect(sortProductsByPrice(catalog, 'desc')).toEqual([
      expect.objectContaining({id: 1, price: 49900}),
      expect.objectContaining({id: 4, price: 27900}),
      expect.objectContaining({id: 3, price: 18900}),
    ])
  })

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const catalog = [
      {id: 5, price: 24900},
      {id: 2, price: 35900},
      {id: 6, price: 21900}
    ];
    expect(sortProductsByPrice(catalog, 'desc')).toEqual([
      expect.objectContaining({id: 2, price: 35900}),
      expect.objectContaining({id: 5, price: 24900}),
      expect.objectContaining({id: 6, price: 21900}),
    ])
  })

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(sortProductsByPrice(products, 'desc')).toEqual([
      expect.objectContaining({id: 1}),
      expect.objectContaining({id: 2}),
      expect.objectContaining({id: 4}),
      expect.objectContaining({id: 5}),
      expect.objectContaining({id: 6}),
      expect.objectContaining({id: 3}),
    ])
  })

  test.each([
    'asc', 'desc'
  ])("'asc' и 'desc' не меняют исходный массив [1, 3, 4]", (direction) => {
    const catalog = [
      {id: 1, price: 49900},
      {id: 3, price: 18900},
      {id: 4, price: 27900}
    ];
    const catalogCopy = JSON.parse(JSON.stringify(catalog));
    sortProductsByPrice(catalog, direction)
    expect(catalog).toEqual(catalogCopy);
  })

  test.each([
    'asc', 'desc'
  ])('направление по умолчанию не меняет исходный массив всех товаров', (direction) => {
    const productCopy = JSON.parse(JSON.stringify(products));
    sortProductsByPrice(products, direction);
    expect(productCopy).toEqual(products);
  })
});
