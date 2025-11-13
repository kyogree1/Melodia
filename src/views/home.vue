<template>
  <div class="min-h-screen bg-[#111111] flex justify-center">
    <div class="w-full bg-white flex flex-col">
      <Header active="home"/>
      <Hero />
      <Overview />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Hero from '../components/herohome.vue'
import Overview from '../components/overview.vue'
import Footer from '../components/footer.vue'
</script>
