function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {

  const existingItemIndex = cart.findIndex((item) => item.id === product.id);
  if (existingItemIndex !== -1) {
    return cart.map((item, index) =>
      index === existingItemIndex ? {
        ...item,
        quantity: item.quantity + quantity
      } : item
    );
  }
  if (quantity <= 0) {
    throw new RangeError('Количество продуктов принимает нулевое значение')
  }
  if (quantity > product.stock) {
    throw new RangeError('Количество продуктов больше количества продуктов на складе')
  }
  return [...cart, {...product, quantity}];
}


function changeQuantity() {
  return notImplemented();
}

function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateOrderTotal(cart, promoValue) {
  const subtotal = calculateCartSubtotal(cart)
  let discount = 0;
  if (subtotal >= 20000 && promoValue === 'SAVE10') {
    discount = (subtotal / 10);
  }
  const delivery = subtotal >= 50000 ? 0 : 30000;
  const total = subtotal - discount + delivery;

  return  {
    subtotal, discount, delivery, total
  }
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
