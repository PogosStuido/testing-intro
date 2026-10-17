function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {

  const existingItemIndex = cart.findIndex((item) => item.id === product.id);
  if (existingItemIndex !== -1) {
    return cart.map((item, index) =>
      index === existingItemIndex ? { ...item, quantity: item.quantity + quantity }: item
    );
  }
  if (quantity <= 0) {
    throw new RangeError('Количество продуктов принимает нулевое значение')
  }
  if (quantity > product.stock) {
    throw new RangeError('Количество продуктов больше количества продуктов на складе')
  }
  return [...cart, { ...product, quantity }];
}


function changeQuantity() {
  return notImplemented();
}

function removeFromCart() {
  return notImplemented();
}

function calculateCartSubtotal() {
  return notImplemented();
}

function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
