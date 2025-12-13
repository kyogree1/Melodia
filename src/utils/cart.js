const CART_KEY = "melodia_cart"

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || []
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export function addToCart(product, qty) {
  const cart = getCart()

  const existing = cart.find(item => item.id === product.title)

  if (existing) {
    existing.qty += qty
  } else {
    cart.push({
      id: product.title,
      name: product.title,
      price: product.price,
      qty,
      image: product.image
    })
  }

  saveCart(cart)
}
