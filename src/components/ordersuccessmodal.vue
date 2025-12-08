<template>
  <div 
    v-if="open"
    class="fixed inset-0 bg-black/40 flex justify-center items-start pt-20 z-[99999]"
  >
    <div class="bg-white w-full max-w-2xl rounded-xl shadow-xl p-8 overflow-y-auto max-h-[85vh]">

      <!-- Success Icon -->
        <div class="flex flex-col items-center text-center">
        <!-- Icon pakai gambar -->
        <div class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
            <img 
            src="../assets/image/centang.png" 
            alt="success"
            class="w-8 h-8 object-contain"
            />
        </div>
        <h2 class="text-xl font-semibold text-gray-800 mt-4">
            Order Successfully Placed!
        </h2>
        <p class="text-gray-500 text-sm mt-1">
            Thank you for shopping at Melodia
        </p>
        </div>


      <!-- Order Number -->
      <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6 flex justify-between items-center">
        <div>
          <p class="text-gray-600 text-sm">Order Number</p>
          <p class="font-semibold text-emerald-700">{{ orderNumber }}</p>
        </div>
        <i class="fa-solid fa-box text-emerald-600 text-lg"></i>
      </div>

      <!-- Shipping Information -->
      <div class="mt-6">
        <h3 class="font-semibold text-gray-700 mb-3">Shipping Information</h3>

        <div class="bg-gray-50 border rounded-lg p-4 text-sm space-y-2">
          <p><span class="font-medium">Name: </span><br>{{ info.name }}</p>
          <p><span class="font-medium">Email: </span><br>{{ info.email }}</p>
          <p><span class="font-medium">Phone: </span><br>{{ info.phone }}</p>
          <p><span class="font-medium">Address: </span><br>{{ info.address }}</p>
        </div>
      </div>

      <!-- Order Detail -->
      <div class="mt-6">
        <h3 class="font-semibold text-gray-700 mb-3">Order Detail</h3>

        <div class="border rounded-lg p-4 text-sm">
          <div 
            v-for="item in cartItems" 
            :key="item.id" 
            class="flex justify-between border-b py-2"
          >
            <div>
              <p class="font-medium">{{ item.name }}</p>
              <p class="text-xs text-gray-500">Qty: {{ item.qty }}</p>
            </div>
            <p>Rp {{ format(item.price * item.qty) }}</p>
          </div>

          <div class="flex justify-between mt-3 font-medium text-emerald-600 border-t pt-2">
            <span>Total Payment</span>
            <span>Rp {{ format(total) }}</span>
          </div>
        </div>
      </div>

      <!-- Email notification -->
      <div class="mt-6 bg-emerald-50 border border-emerald-200 text-sm text-gray-700 p-3 rounded-lg flex justify-between">
        <span>We have sent an order confirmation to your email.</span>
        <span class="font-semibold text-emerald-700">{{ info.email }}</span>
      </div>

      <button class="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg" @click="goHome">Go Back to Home</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const props = defineProps({
  open: Boolean,
  cartItems: Array,
  total: Number,
  info: Object // from checkout form
})

const emit = defineEmits(["close"])

// Create random order number
const orderNumber = "MDL-" + Math.floor(10000000 + Math.random() * 90000000)

function format(n) {
  return n.toLocaleString("id-ID")
}

const router = useRouter()

function goHome() {
  router.push("/home")
  emit("close")
}
</script>
