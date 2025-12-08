<template>
  <div class="w-full max-w-6xl mx-auto flex justify-start -mt-8 relative">
    <ul
      class="bg-white inline-flex rounded-2xl shadow-lg p-4 gap-3 
             overflow-x-auto scroll-smooth
             scrollbar-thin scrollbar-thumb-slate-400 
             scrollbar-track-slate-200"
    >
      <li
        v-for="category in categories"
        :key="category"
      >
        <button
          :class="active === category ? activeClass : defaultClass"
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

const active = props.active
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
