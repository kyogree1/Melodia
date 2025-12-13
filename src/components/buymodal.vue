<template>
  <!-- BACKDROP -->
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <!-- MODAL -->
    <div class="bg-white w-[320px] rounded-xl p-6">
      
      <h2 class="text-lg font-semibold text-gray-900">
        {{ product.title }}
      </h2>
      <p class="text-sm text-gray-500 mb-4">
        Rp {{ product.price.toLocaleString("id-ID") }}
      </p>

      <!-- INPUT JUMLAH -->
      <label class="text-sm text-gray-700">Jumlah</label>
      <input
        type="number"
        v-model.number="qty"
        min="1"
        :max="product.stock"
        class="w-full border rounded-lg p-2 mt-1"
      />

      <p class="text-xs text-gray-400 mt-1">
        Stok tersedia: {{ product.stock }}
      </p>

      <!-- BUTTON -->
      <div class="flex gap-3 mt-5">
        <button
          class="flex-1 border rounded-lg py-2"
          @click="emit('close')"
        >
          Batal
        </button>

        <button
          class="flex-1 bg-emerald-500 text-white rounded-lg py-2"
          @click="confirm"
        >
          Beli
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(["close", "confirm"])
const qty = ref(1)

function confirm() {
  emit("confirm", {
    product: props.product,
    qty: qty.value
  })
}
</script>
