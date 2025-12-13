<template>
  <section class="px-8 py-20 bg-[#e6f7f4]">
    <div
      v-for="order in orders"
      :key="order.id"
      class="max-w-4xl mx-auto bg-white shadow-xl rounded-xl
             border border-gray-200 mb-10"
    >

      <!-- HEADER -->
      <div class="flex justify-between items-center bg-gray-100 px-6 py-4 rounded-t-xl">
        <div class="flex items-center gap-3 text-gray-700 font-medium">
          <i class="fa-regular fa-calendar text-lg"></i>
          <p>{{ order.date }}</p>
        </div>

        <div class="flex items-center gap-3">
          <span class="bg-yellow-300 text-gray-800 text-sm px-4 py-1 rounded-full">
            {{ order.status }}
          </span>
          <span class="text-gray-500 text-sm">#{{ order.id }}</span>
        </div>
      </div>

      <!-- BODY -->
      <div class="px-6 py-6 space-y-6">

        <!-- CUSTOMER -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-gray-700 mb-2">Customer</h3>
            <p class="font-bold">{{ order.customer.name }}</p>
            <p class="text-sm text-gray-600">{{ order.customer.email }}</p>
            <p class="text-sm text-gray-600">{{ order.customer.phone }}</p>
          </div>

          <div>
            <h3 class="font-semibold text-gray-700 mb-2">Shipping</h3>
            <p class="text-sm text-gray-600">
              {{ order.customer.address }}
            </p>
          </div>
        </div>

        <hr />

        <!-- ITEMS -->
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Order Detail</h3>

          <div
            v-for="item in order.items"
            :key="item.name"
            class="flex justify-between text-gray-900"
          >
            <span>{{ item.name }} (x{{ item.qty }})</span>
            <span>Rp {{ format(item.price * item.qty) }}</span>
          </div>
        </div>

        <hr />

        <!-- TOTAL -->
        <div class="flex justify-between font-semibold">
          <span>Total</span>
          <span>Rp {{ format(order.total) }}</span>
        </div>

      </div>
    </div>

    <p
      v-if="orders.length === 0"
      class="text-center text-gray-500"
    >
      No order history yet
    </p>
  </section>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  orders: Array
})

function format(num) {
  return num.toLocaleString("id-ID")
}
</script>
