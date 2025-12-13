<template>
  <div
    class="bg-white p-4 rounded-xl border shadow-sm
           flex justify-between items-center w-full"
  >
    <!-- LEFT: IMAGE + INFO -->
    <div class="flex items-center gap-4">
      <img
        :src="localImage"
        class="w-20 h-20 rounded-lg object-cover"
      />

      <div>
        <p class="font-semibold text-gray-800">
          {{ item.name }}
        </p>

        <p class="text-emerald-600 font-semibold text-sm">
          Rp {{ format(item.price) }}
        </p>

        <!-- QTY CONTROL (TETAP ADA) -->
        <div class="flex items-center gap-2 mt-2">
          <button
            class="w-7 h-7 bg-gray-100 rounded
                   flex justify-center items-center
                   text-gray-700
                   disabled:opacity-40"
            :disabled="item.qty <= 1"
            @click="emit('decrease', item.id)"
          >
            −
          </button>

          <span
            class="px-3 py-1 bg-gray-100 rounded
                   text-gray-700 text-sm"
          >
            {{ item.qty }}
          </span>

          <button
            class="w-7 h-7 bg-gray-100 rounded
                   flex justify-center items-center
                   text-gray-700 hover:bg-gray-200 transition"
            @click="emit('increase', item.id)"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <!-- RIGHT: DELETE + TOTAL -->
    <div class="flex flex-col items-end gap-3">
      <!-- DELETE (LUCIDE) -->
      <button
        class="text-red-500 hover:text-red-600 transition"
        @click="emit('remove', item.id)"
        title="Hapus item"
      >
        <Trash2 class="w-5 h-5" />
      </button>

      <p class="font-medium text-gray-800">
        Rp {{ format(item.price * item.qty) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { Trash2 } from "lucide-vue-next"

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(["increase", "decrease", "remove"])

function format(num) {
  return num.toLocaleString("id-ID")
}

const localImage = computed(() =>
  new URL(`../assets/image/${props.item.image}`, import.meta.url).href
)
</script>
