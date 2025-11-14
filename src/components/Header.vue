<template>
  <header class="w-full bg-[#0e2036] px-14 py-5 flex items-center justify-between">

    <div class="flex items-center gap-3">
      <i class="fa-solid fa-music text-teal-400 text-3xl"></i>
      <span class="text-white text-2xl font-semibold tracking-wide">Melodia</span>
    </div>

    <nav class="hidden lg:block">
      <ul class="flex items-center gap-10 bg-white px-10 py-3 rounded-full shadow-lg">

        <li>
          <a href="/":class="active === 'home' ? activeClass : defaultClass">
            Home
          </a>
        </li>

        <li>
          <a href="" :class="active === 'catalog' ? activeClass : defaultClass">
            Catalog
          </a>
        </li>

        <li>
          <a href="":class="active === 'about' ? activeClass : defaultClass">
            About
          </a>
        </li>

        <li>
          <a href="" :class="active === 'order' ? activeClass : defaultClass" >Order
          </a>
        </li>

        <li>
          <a href="/contact" :class="active === 'contact' ? activeClass : defaultClass">
            Contact
          </a>
        </li>

      </ul>
    </nav>

    <button class="hidden lg:flex bg-white p-4 rounded-full shadow-md hover:bg-gray-100 transition items-center justify-center">
      <img
        src="../assets/image/online-shopping.png"
        alt="cart icon"
        class="w-7 h-7 object-contain"
      />
    </button>

  </header>
</template>

<script setup>
const props = defineProps({
  active: {
    type: String,
    default: "home"
  }
});

const activeClass =
  "flex items-center justify-center bg-emerald-500 text-white px-6 py-2 rounded-full text-base font-medium shadow-sm hover:bg-emerald-600 transition";

const defaultClass =
  "flex items-center justify-center text-gray-800 text-base font-medium px-6 py-2 rounded-full hover:text-emerald-500 transition";
</script>
