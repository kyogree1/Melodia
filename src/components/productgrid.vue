<template>
  <section class="px-6 pt-6 pb-20 flex justify-center">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full mx-auto justify-items-center-safe">

      <ProductCard
        v-for="p in filteredProducts"
        :key="p.title"
        :image="p.image"
        :brand="p.brand"
        :title="p.title"
        :price="p.price"
        :stock="p.stock"
      />

    </div>
  </section>
</template>



<script setup>
import ProductCard from "./card.vue"
import { computed } from "vue"

const props = defineProps({
  category: String,
  products: Array
})

const filteredProducts = computed(() => {
  if (props.category === "All") return props.products
  return props.products.filter(p => p.category === props.category)
})
</script>



