<template>
  <div 
    v-if="open"
    class="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]"
  >
    <div class="bg-white w-full max-w-2xl rounded-xl shadow-xl overflow-hidden">

      <!-- HEADER -->
      <div class="px-6 py-4 bg-[#0e2036] text-white flex justify-between items-center">
        <h2 class="text-lg font-semibold">Checkout</h2>
        <button @click="emit('close')">
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>

      <!-- BODY -->
      <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto">

        <!-- CART SUMMARY -->
        <section>
          <h3 class="font-semibold text-gray-700 mb-3">Cart Summary</h3>

          <div 
            v-for="item in cartItems"
            :key="item.id"
            class="flex justify-between text-sm text-gray-700"
          >
            <span>{{ item.name }} × {{ item.qty }}</span>
            <span>Rp {{ format(item.price * item.qty) }}</span>
          </div>

          <div class="flex justify-between font-semibold text-emerald-600 mt-3 border-t pt-2">
            <span>Total</span>
            <!-- FIX 1: props.total -->
            <span>Rp {{ format(props.total) }}</span>
          </div>
        </section>

        <!-- FORM -->
        <TextInput label="Your Full Name" v-model="form.name" placeholder="enter your full name" />
        <TextInput label="Email" v-model="form.email" placeholder="email@example.com" type="email" />
        <TextInput label="Phone Number" v-model="form.phone" placeholder="08xxxxxxxxxx" type="tel" />
        <TextArea label="Address" v-model="form.address" placeholder="enter your full address" rows="4" />

        <!-- PAYMENT METHOD -->
        <section>
          <h3 class="font-medium text-gray-700 mb-2">Payment Method</h3>
            <div 
            v-for="method in paymentOptions"
            :key="method.value"
            class="border rounded-lg p-4 mt-2 cursor-pointer hover:bg-gray-50"
            :class="{ 'ring-2 ring-emerald-500': form.payment === method.value }"
            @click="form.payment = method.value"
            >
            <div class="flex items-center gap-3">
                <i :class="method.icon" class="text-lg"></i>

                <div class="flex flex-col">
                <span class="font-medium text-gray-800">{{ method.label }}</span>
                <span class="text-xs text-gray-500">{{ method.desc }}</span>
                </div>
            </div>
            </div>
        </section>

      </div>

      <!-- FOOTER -->
      <div class="flex justify-between px-6 py-4 border-t bg-gray-50">
        <button 
          class="px-6 py-2 border rounded-lg"
          @click="emit('close')"
        >
          Cancel
        </button>

        <button 
          class="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
          @click="confirm()"
        >
          Confirm Purchase
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import TextInput from "./textinput.vue"
import TextArea from "./textarea.vue"

const props = defineProps({
  open: Boolean,
  cartItems: Array,
  total: Number
})

const emit = defineEmits(["close", "confirm"])

function format(num) {
  return num.toLocaleString("id-ID")
}

const form = reactive({
  name: "",
  email: "",
  phone: "",
  address: "",
  payment: ""
})

const paymentOptions = [
  { value: "bank", label: "Transfer Bank", desc: "BCA, Mandiri, BNI, BRI", icon: "fa-solid fa-building-columns" },
  { value: "ewallet", label: "E-Wallet", desc: "GoPay, OVO, DANA, ShopeePay", icon: "fa-solid fa-wallet" },
  { value: "card", label: "Kartu Kredit/Debit", desc: "Visa, Mastercard, JCB", icon: "fa-solid fa-credit-card" },
  { value: "cod", label: "Cash on Delivery", desc: "Bayar saat barang diterima", icon: "fa-solid fa-money-bill-wave" },
]

function confirm() {
  emit("confirm", { ...form })
}
</script>
