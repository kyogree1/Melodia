<template>
  <header class="w-full bg-[#0e2036] px-6 py-5 flex items-center justify-between">

    <div class="flex items-center gap-3">
      <i class="fa-solid fa-music text-teal-400 text-3xl"></i>
      <span class="text-white text-2xl font-semibold tracking-wide">Melodia</span>
    </div>

    <!-- DESKTOP NAVIGATION -->
    <nav class="hidden lg:flex items-center gap-6">

      <ul class="flex items-center gap-10 bg-white px-10 py-3 rounded-full shadow-lg">
        <li><router-link to="/home" :class="checkActive('home')">Home</router-link></li>
        <li><router-link to="/catalog" :class="checkActive('catalog')">Catalog</router-link></li>
        <li><router-link to="/about" :class="checkActive('about')">About</router-link></li>
        <li><router-link to="/order" :class="checkActive('order')">Order</router-link></li>
        <li><router-link to="/contact" :class="checkActive('contact')">Contact</router-link></li>
      </ul>

    <!-- CART BUTTON -->
    <button
      class="bg-gradient-to-b from-[#192642] via-[#138d7d] to-[#30c46f] 
            h-10 w-10 rounded-full flex items-center justify-center
            text-white shadow-md">
      <ShoppingCart class="h-5 w-5" />
    </button>

    <!-- PROFILE ICON -->
    <button
      class="bg-gradient-to-b from-[#192642] via-[#138d7d] to-[#30c46f]
            h-10 w-10 rounded-full flex items-center justify-center
            text-white shadow-md">
      <User class="h-5 w-5" />
    </button>

    </nav>

    <!-- MOBILE HAMBURGER -->
    <button
      class="lg:hidden text-white"
      @click="mobileOpen = true">
      <Menu class="h-7 w-7" />
    </button>

    <!-- MOBILE MENU OVERLAY -->
    <div
      v-if="mobileOpen"
      class="fixed inset-0 bg-black/50 z-40"
      @click="mobileOpen = false"
    ></div>

    <!-- MOBILE MENU DRAWER -->
    <div
      class="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl p-6 transform transition-all"
      :class="mobileOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg font-semibold text-gray-700">Menu</h2>
        <button @click="mobileOpen = false">
          <X class="h-6 w-6 text-gray-600" />
        </button>
      </div>

      <!-- LIST MENU (PROFILE FIRST) -->
      <ul class="space-y-4 text-gray-700">

        <li class="flex items-center gap-3 font-medium cursor-pointer">
          <User class="h-4 w-4" />
          Profile
        </li>

        <li class="flex items-center gap-3 font-medium cursor-pointer">
          <ShoppingCart class="h-4 w-4" />
          Order
        </li>

        <!-- NAVBAR ITEMS -->
        <li><router-link @click="closeMobile" to="/home">Home</router-link></li>
        <li><router-link @click="closeMobile" to="/catalog">Catalog</router-link></li>
        <li><router-link @click="closeMobile" to="/about">About</router-link></li>
        <li><router-link @click="closeMobile" to="/order">Order</router-link></li>
        <li><router-link @click="closeMobile" to="/contact">Contact</router-link></li>

        <hr class="my-2">

        <li class="flex items-center gap-3 text-red-600 cursor-pointer">
          <LogOut class="h-4 w-4" />
          Logout
        </li>

      </ul>
    </div>

  </header>
</template>

<script setup>
import { ref } from "vue";
import { ShoppingCart, User, LogOut, Menu, X } from "lucide-vue-next";

const props = defineProps({ active: String });
const mobileOpen = ref(false);

const closeMobile = () => (mobileOpen.value = false);

const activeClass =
  "flex items-center justify-center bg-emerald-500 text-white px-6 py-2 rounded-full font-medium shadow-sm";

const defaultClass =
  "flex items-center justify-center text-gray-800 px-6 py-2 rounded-full hover:text-emerald-500";

const checkActive = (name) => (props.active === name ? activeClass : defaultClass);
</script>
