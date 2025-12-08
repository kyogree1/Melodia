<template>
  <div class="w-full bg-[#f3f0ef] flex flex-col">
    <Header active="catalog"/>
    <HeroCatalog />
    <catalogbar v-model:active="selectedCategory"/>
    <catalogsearch />
    <ProductGrid :category="selectedCategory" :products="products" />
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import HeroCatalog from '../components/herocatalog.vue'
import catalogbar from '../components/catalogbar.vue'
import catalogsearch from '../components/catalogsearch.vue'
import ProductGrid from '../components/productgrid.vue'
import Footer from '../components/footer.vue'
import { ref } from "vue";  

const selectedCategory = ref("All")

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
  },
]
</script>
