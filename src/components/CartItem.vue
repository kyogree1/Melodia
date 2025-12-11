<template>
  <article
    class="bg-white rounded-2xl shadow-md hover:shadow-lg transition 
          flex flex-col max-w-[320px] w-full p-4 space-y-3">

    <div class="text-xs text-emerald-600 font-semibold tracking-wide">
      {{ brand }}
    </div>

    <h3 class="text-lg font-semibold text-gray-900 leading-snug">
      {{ title }}
    </h3>

    <p class="text-sm text-gray-700">
      {{ price }}
    </p>

    <p class="text-sm text-gray-600">{{ stock }}</p>

  </article>
</template>

<script setup>
const props = defineProps({
  brand: String,
  title: String,
  price: String,
  stock: [Number, String]
});
</script>
