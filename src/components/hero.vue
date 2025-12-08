<template>
  <section
    class="bg-gradient-to-b from-[#192642] via-[#138d7d] to-[#30c46f] px-8 py-24 text-white"
  >
    <div class="max-w-4xl mx-auto text-center">

      <!-- Icon -->
      <div class="flex justify-center mb-4">
        <img
          :src="props.image"
          :alt="title"
          class="w-16 h-16 object-contain"
        />
      </div>

      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        {{ title }}
      </h1>

      <p class="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
        {{ description }}
      </p>

    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  image: String,
  title: String,
  description: String
})
</script>
