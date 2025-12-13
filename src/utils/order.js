const ORDER_KEY = "melodia_orders"

export function getOrders() {
  return JSON.parse(localStorage.getItem(ORDER_KEY)) || []
}

export function saveOrders(orders) {
  localStorage.setItem(ORDER_KEY, JSON.stringify(orders))
}

export function addOrder(order) {
  const orders = getOrders()
  orders.unshift(order) // order terbaru di atas
  saveOrders(orders)
}
