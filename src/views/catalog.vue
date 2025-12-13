<template>
  <div class="w-full min-h-screen bg-[#f3f0ef] flex flex-col">
    <Header active="catalog" />

    <!-- CONTENT -->
    <main class="flex-1">
      <HeroCatalog />

      <catalogbar v-model:active="selectedCategory" />

      <catalogsearch
        @search="searchQuery = $event"
        @sort="sortType = $event"
      />

      <ProductGrid
        :products="filteredProducts"
        @buy="openModal"
      />
    </main>

    <!-- MODAL -->
    <BuyModal
      v-if="showModal"
      :product="selectedProduct"
      @close="showModal = false"
      @confirm="addToCart"
    />

    <!-- TOAST -->
    <div
      v-if="showToast"
      class="fixed bottom-6 right-6 z-50
            bg-emerald-500 text-white
            px-4 py-3 rounded-xl shadow-lg
            transition-all duration-300
            hover:bg-emerald-600 hover:shadow-xl
            hover:-translate-y-1 hover:scale-[1.02]
            cursor-pointer"
    >
      Barang berhasil ditambahkan ke keranjang
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

import Header from "../components/Header.vue"
import HeroCatalog from "../components/herocatalog.vue"
import catalogbar from "../components/catalogbar.vue"
import catalogsearch from "../components/catalogsearch.vue"
import ProductGrid from "../components/productgrid.vue"
import Footer from "../components/footer.vue"
import BuyModal from "../components/buymodal.vue"
import { addToCart as saveToCart } from "../utils/cart"


const selectedCategory = ref("All")
const searchQuery = ref("")
const sortType = ref("none") // ✅ default: tidak ada filter

const showModal = ref(false)
const selectedProduct = ref(null)

const products = [
  // ===== GUITAR =====
{
  image: "gibson.webp",
  brand: "Gibson",
  title: "Les Paul Standard",
  price: 5000000,
  stock: 10,
  category: "Guitar",
},
{
  image: "fenderstrat.webp",
  brand: "Fender",
  title: "Stratocaster Electric Guitar",
  price: 7200000,
  stock: 5,
  category: "Guitar",
},
{
  image: "yamahaacoustic.webp",
  brand: "Yamaha",
  title: "F310 Acoustic Guitar",
  price: 1800000,
  stock: 12,
  category: "Guitar",
},

// ===== BASS =====
{
  image: "fenderjazzbass.webp",
  brand: "Fender",
  title: "Jazz Bass",
  price: 6500000,
  stock: 6,
  category: "Bass",
},
{
  image: "ibanezsr300.webp",
  brand: "Ibanez",
  title: "SR300 Electric Bass",
  price: 4200000,
  stock: 7,
  category: "Bass",
},

// ===== DRUM =====
{
  image: "pearlroadshowdrum.jpg",
  brand: "Pearl",
  title: "Roadshow Drum Kit",
  price: 7000000,
  stock: 4,
  category: "Drum",
},
{
  image: "yamaharxv.webp",
  brand: "Yamaha",
  title: "RX-V Drum Set",
  price: 8500000,
  stock: 3,
  category: "Drum",
},

// ===== KEYBOARD =====
{
  image: "yamahae373.webp",
  brand: "Yamaha",
  title: "PSR-E373 Keyboard",
  price: 3000000,
  stock: 8,
  category: "Keyboard",
},
{
  image: "psre373.jpg",
  brand: "Casio",
  title: "CT-X700 Keyboard",
  price: 2700000,
  stock: 10,
  category: "Keyboard",
},

// ===== PIANO =====
{
  image: "rolandfp30.webp",
  brand: "Roland",
  title: "FP-30 Digital Piano",
  price: 9800000,
  stock: 5,
  category: "Piano",
},
{
  image: "korgb2.webp",
  brand: "Korg",
  title: "B2 Digital Piano",
  price: 6200000,
  stock: 6,
  category: "Piano",
},
// ===== WIND INSTRUMENT =====
{
  image: "yamahayfl222.webp",
  brand: "Yamaha",
  title: "YFL-222 Concert Flute",
  price: 4200000,
  stock: 4,
  category: "Wind Instrument",
},
{
  image: "yamahayas280.webp",
  brand: "Yamaha",
  title: "YAS-280 Alto Saxophone",
  price: 12500000,
  stock: 3,
  category: "Wind Instrument",
},
{
  image: "bachtr300h2.webp",
  brand: "Bach",
  title: "TR-300H2 Trumpet",
  price: 8900000,
  stock: 2,
  category: "Wind Instrument",
},
{
  image: "yamahaycl255.webp",
  brand: "Yamaha",
  title: "YCL-255 Clarinet",
  price: 5100000,
  stock: 5,
  category: "Wind Instrument",
},

// ===== ACCESSORIES =====
{
  image: "guitarpick.webp",
  brand: "Dunlop",
  title: "Tortex Guitar Pick Pack",
  price: 50000,
  stock: 50,
  category: "Accessories",
},
{
  image: "guitarstrings.webp",
  brand: "Ernie Ball",
  title: "Regular Slinky Strings",
  price: 120000,
  stock: 30,
  category: "Accessories",
},
{
  image: "keyboardstand.webp",
  brand: "Hercules",
  title: "KS120B Keyboard Stand",
  price: 350000,
  stock: 15,
  category: "Accessories",
},
{
  image: "drumsticks.webp",
  brand: "Vic Firth",
  title: "5A Drumsticks",
  price: 95000,
  stock: 40,
  category: "Accessories",
},
{
  image: "instrumentcable.webp",
  brand: "Mogami",
  title: "Gold Instrument Cable",
  price: 450000,
  stock: 10,
  category: "Accessories",
}
]

/* ===== OPEN MODAL ===== */
function openModal(product) {
  selectedProduct.value = product
  showModal.value = true
}

/* FILTER + SEARCH + SORT */
const filteredProducts = computed(() => {
  let result = [...products] // ✅ clone array

  // CATEGORY
  if (selectedCategory.value !== "All") {
    result = result.filter(
      p => p.category === selectedCategory.value
    )
  }

// SEARCH by BRAND + TITLE
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()

    result = result.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q)
    )
  } 

  // SORT (HARGA)
  if (sortType.value === "low-high") {
    result.sort((a, b) => a.price - b.price)
  }

  if (sortType.value === "high-low") {
    result.sort((a, b) => b.price - a.price)
  }
  // sortType === "none" → tidak di-sort
  return result
})

const showToast = ref(false)

function addToCart({ product, qty }) {
  saveToCart(product, qty)

  showModal.value = false
  showToast.value = true

  setTimeout(() => {
    showToast.value = false
  }, 2000)
}

</script>

