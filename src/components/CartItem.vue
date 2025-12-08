<template>
  <div class="bg-white p-4 rounded-xl border shadow-sm flex justify-between items-center">
    
    <!-- Left: Image & Info -->
    <div class="flex items-center gap-4">
      <img 
        :src="localImage" 
        alt="" 
        class="w-20 h-20 rounded-lg object-cover"
      />


      <div>
        <p class="text-gray-800 font-semibold">{{ item.name }}</p>
        <p class="text-emerald-600 font-semibold text-sm">Rp {{ format(item.price) }}</p>

        <!-- Quantity -->
        <div class="flex items-center gap-2 mt-2">
          <button class="w-7 h-7 bg-gray-100 rounded flex justify-center items-center text-gray-700" @click="emit('decrease', item.id)">−</button>
          <span class="px-3 py-1 bg-gray-100 rounded text-gray-700 text-sm">{{ item.qty }}</span>
          <button class="w-7 h-7 bg-gray-100 rounded flex justify-center items-center text-gray-700" @click="emit('increase', item.id)">+</button>
        </div>
      </div>
    </div>

    <!-- Right: Price & Delete -->
    <div class="flex flex-col items-end">
      <button class="text-red-500 mb-4">
        <i class="fa-solid fa-trash"></i>
      </button>

      <p class="font-medium text-gray-800">Rp {{ format(item.price * item.qty) }}</p>
    </div>

  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  item: Object
})

const emit = defineEmits(['increase', 'decrease'])

function format(value) {
  return value.toLocaleString("id-ID")
}

const localImage = computed(() =>
  new URL(`../assets/image/${props.item.image}`, import.meta.url).href
)
</script>

