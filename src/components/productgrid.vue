<template>
  <section class="px-6 pt-6 pb-20 flex justify-center">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full mx-auto">

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
import ProductCard from "./Card.vue"
import { computed } from "vue"

const props = defineProps({
  category: { type: String, default: "All" }
})

const products = [
  {
    image: "gibson.webp",
    brand: "Gibson",
    title: "Les Paul Standard",
    price: "5.000.000",
    stock: 10,
    category: "Guitar"
  },
  {
    image: "psre373.jpg",
    brand: "Yamaha",
    title: "PSR-E373 Keyboard",
    price: "3.000.000",
    stock: 8,
    category: "Keyboard"
  },
  {
    image: "pearlroadshowdrum.jpg",
    brand: "Pearl",
    title: "Roadshow Drum Kit",
    price: "7.000.000",
    stock: 4,
    category: "Drum"
  },
    {
    image: "fenderjazzbass.webp",
    brand: "Fender",
    title: "Jazz Bass",
    price: "6.500.000",
    stock: 6,
    category: "Bass"
    }
]

const filteredProducts = computed(() => {
  if (props.category === "All") return products
  return products.filter(p => p.category === props.category)
})
</script>

