<template>
  <section class="px-6 pt-6 pb-20 flex justify-center">
    <div
      class="grid gap-4 md:grid-cols-2 lg:grid-cols-4
             max-w-6xl w-full mx-auto"
    >
      <ProductCard
        v-for="p in products"
        :key="p.title"
        :image="p.image"
        :brand="p.brand"
        :title="p.title"
        :price="p.price"
        :stock="p.stock"
        @buy="emit('buy', p)"
      />
    </div>
  </section>
</template>

<script setup>
import ProductCard from "./card.vue"

const emit = defineEmits(["buy"])

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>
