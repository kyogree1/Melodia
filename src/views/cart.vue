<template>
  <div class="bg-gray-50 flex flex-col min-h-screen">
    <Header active="cart" />

    <section class="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">

      <!-- TITLE -->
      <h1 class="text-2xl font-semibold text-gray-800">Your Cart</h1>
      <p class="text-gray-500 text-sm mb-6">
        You have {{ cartItems.length }} items in your cart
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">

        <!-- LEFT : CART ITEMS -->
        <div class="space-y-4 lg:col-span-2 w-full">
          <CartItem
            v-for="item in cartItems"
            :key="item.id"
            :item="item"
            @increase="increaseQty"
            @decrease="decreaseQty"
            @remove="removeItem"
          />

          <!-- EMPTY STATE -->
          <p
            v-if="cartItems.length === 0"
            class="text-gray-400 text-center py-20"
          >
            Your cart is empty
          </p>
        </div>

        <!-- RIGHT : SUMMARY -->
        <div class="bg-white p-6 rounded-xl shadow-md border h-fit w-full">
          <h2 class="font-semibold text-gray-700 mb-4">Cart Summary</h2>

          <div v-if="cartItems.length > 0" class="text-sm space-y-2">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>Rp {{ format(subtotal) }}</span>
            </div>

            <div class="flex justify-between">
              <span>Shipping</span>
              <span>Rp {{ format(shipping) }}</span>
            </div>

            <div class="flex justify-between">
              <span>Tax (10%)</span>
              <span>Rp {{ format(tax) }}</span>
            </div>

            <hr class="my-3" />

            <div class="flex justify-between font-semibold text-emerald-600">
              <span>Total</span>
              <span>Rp {{ format(total) }}</span>
            </div>

            <button
              @click="checkoutOpen = true"
              class="mt-6 w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition"
            >
              Proceed To Checkout
            </button>
          </div>

          <!-- EMPTY SUMMARY -->
          <div v-else class="text-sm text-gray-400 text-center py-10">
            Add items to see summary
          </div>
        </div>

        <!-- MODALS -->
        <CheckoutModal
          :open="checkoutOpen"
          :cartItems="cartItems"
          :total="total"
          @close="checkoutOpen = false"
          @confirm="submitOrder"
        />

        <OrderSuccessModal
          :open="successOpen"
          :cartItems="successOrder.items"
          :total="successOrder.total"
          :info="successOrder.info"
          @close="successOpen = false"
        />
      </div>
    </section>

    <Footer />
  </div>
</template>


<script setup>
import { reactive, computed, ref, onMounted } from "vue"

import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"
import CartItem from "../components/CartItem.vue"
import CheckoutModal from "../components/checkoutmodal.vue"
import OrderSuccessModal from "../components/ordersuccessmodal.vue"

import { getCart, saveCart } from "../utils/cart"
import { addOrder } from "../utils/order"

// ================= CART STATE =================
const cartItems = reactive([])

onMounted(() => {
  const savedCart = getCart()
  savedCart.forEach(item => cartItems.push(item))
})

// ================= QTY CONTROL =================
function increaseQty(id) {
  const item = cartItems.find(i => i.id === id)
  if (item) {
    item.qty++
    saveCart(cartItems)
  }
}

function decreaseQty(id) {
  const item = cartItems.find(i => i.id === id)
  if (item && item.qty > 1) {
    item.qty--
    saveCart(cartItems)
  }
}

function removeItem(id) {
  const index = cartItems.findIndex(item => item.id === id)
  if (index !== -1) {
    cartItems.splice(index, 1)
    saveCart(cartItems)
  }
}

// ================= PRICE =================
const subtotal = computed(() =>
  cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
)

const shipping = computed(() =>
  cartItems.length > 0 ? 50000 : 0
)

const tax = computed(() =>
  cartItems.length > 0 ? subtotal.value * 0.1 : 0
)

const total = computed(() =>
  subtotal.value + shipping.value + tax.value
)

function format(num) {
  return num.toLocaleString("id-ID")
}

// ================= MODAL =================
const checkoutOpen = ref(false)
const successOpen = ref(false)
const orderInfo = ref({})

// ================= CHECKOUT (SATU-SATUNYA) =================
function submitOrder(orderData) {
  // SIMPAN DATA UNTUK MODAL SUKSES
  successOrder.value = {
    items: cartItems.map(item => ({ ...item })),
    total: total.value,
    info: { ...orderData }
  }

  const order = {
    id: "ORD-" + Date.now(),
    date: new Date().toLocaleString("en-GB"),
    status: "Pending",
    customer: orderData,
    items: successOrder.value.items,
    total: successOrder.value.total
  }

  addOrder(order)

  // BARU KOSONGKAN CART
  cartItems.splice(0)
  saveCart([])

  checkoutOpen.value = false
  successOpen.value = true
}

const successOrder = ref({
  items: [],
  total: 0,
  info: {}
})

</script>


