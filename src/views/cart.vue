        <template>
        <div class="bg-gray-50 min-h-screen">

            <Header active="cart" />

            <section class="max-w-6xl mx-auto px-6 py-12">

            <!-- Title -->
            <h1 class="text-2xl font-semibold text-gray-800">Your Cart</h1>
            <p class="text-gray-500 text-sm mb-6">
                You have {{ cartItems.length }} items in your cart
            </p>

            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Left: Cart Items -->
                <div class="space-y-4 lg:col-span-2">

                <CartItem 
                    v-for="item in cartItems"
                    :key="item.id"
                    :item="item"
                    @increase="increaseQty"
                    @decrease="decreaseQty"
                />
                </div>
                <!-- Right: Summary Card -->
                <div class="bg-white p-6 rounded-xl shadow-md border h-fit">

                <h2 class="font-semibold text-gray-700 mb-4">Cart Summary</h2>

                <div class="text-sm space-y-2">
                    <div class="flex justify-between">
                      <span>Subtotal</span>
                      <span>Rp {{ format(subtotal) }}</span>
                    </div>

                    <div class="flex justify-between">
                      <span>Shipping</span>
                      <span>Rp {{ format(shipping) }}</span>
                    </div>

                    <div class="flex justify-between">
                      <span>Tax</span>
                      <span>Rp {{ format(tax) }}</span>
                    </div>

                    <hr class="my-3" />

                    <div class="flex justify-between font-semibold text-emerald-600">
                      <span>Total</span>
                      <span>Rp {{ format(total) }}</span>
                    </div>
                </div>

                <button
                  @click="checkoutOpen = true"
                  class="mt-6 w-full bg-emerald-500 text-white py-3 rounded-lg"
                >
                  Proceed To Checkout
                </button>

                <CheckoutModal 
                  :open="checkoutOpen"
                  :cartItems="cartItems"
                  :total="total"
                  @close="checkoutOpen = false"
                  @confirm="submitOrder"
                />
                </div>

                <OrderSuccessModal
                  :open="successOpen"
                  :cartItems="cartItems"
                  :total="total"
                  :info="orderInfo"
                  @close="successOpen = false"
                />  
            </div>
            </section>
            <Footer />
        </div>
        </template>

<script setup>
import { reactive, computed, ref } from "vue";
import Header from '../components/Header.vue'   
import Footer from "../components/footer.vue"
import CartItem from "../components/CartItem.vue"
import CheckoutModal from "../components/checkoutmodal.vue"
import OrderSuccessModal from "../components/ordersuccessmodal.vue"

// CART ITEMS
const cartItems = reactive([
  { id: 1, name: "1957 Les Paul Junior Single Cut Reissue, Heavy Aged", price: 5000000, qty: 1, image: "gibson.webp" },
  { id: 2, name: "1957 Les Paul Junior Single Cut Reissue, Heavy Aged", price: 5000000, qty: 2, image: "gibson.webp" },
  { id: 3, name: "1957 Les Paul Junior Single Cut Reissue, Heavy Aged", price: 5000000, qty: 3, image: "gibson.webp" },
])

function increaseQty(id) {
  const item = cartItems.find(i => i.id === id)
  if (item) item.qty++
}

function decreaseQty(id) {
  const item = cartItems.find(i => i.id === id)
  if (item && item.qty > 1) item.qty--
}

// SUMMARY COMPUTATION
const shipping = 50000

const subtotal = computed(() =>
  cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
)

const tax = computed(() => subtotal.value * 0.1)
const total = computed(() => subtotal.value + shipping + tax.value)

function format(num) {
  return num.toLocaleString("id-ID")
}

// CHECKOUT MODAL STATE
const checkoutOpen = ref(false)

// ORDER SUCCESS MODAL STATE
const successOpen = ref(false)
const orderInfo = ref({})

// HANDLE CONFIRM PURCHASE
function submitOrder(orderData) {
  orderInfo.value = orderData      // simpan info user
  checkoutOpen.value = false       // tutup modal checkout
  successOpen.value = true         // tampilkan modal sukses
}
</script>