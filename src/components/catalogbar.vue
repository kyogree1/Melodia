<template>
  <div class="w-full flex justify-center mt-6">
    <ul
      class="w-full max-w-6xl bg-white inline-flex rounded-2xl shadow-lg p-4 gap-3
             overflow-x-auto scroll-smooth
             scrollbar-thin scrollbar-thumb-slate-400 
             scrollbar-track-slate-200"
    >
      <li v-for="category in categories" :key="category">
        <button
          :class="props.active === category ? activeClass : defaultClass"
          @click="emit('update:active', category)"
        >
          {{ category }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    type: String,
    default: "All"
  }
})

const emit = defineEmits(["update:active"])

const categories = [
  "All",
  "Accessories",
  "Wind Instrument",
  "Bass",
  "Guitar",
  "Drum",
  "Piano",
  "Keyboard"
]

const activeClass =
  "bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow transition"

const defaultClass =
  "bg-blue-100 text-gray-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition"
</script>
