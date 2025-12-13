<template>
  <div class="min-h-screen bg-[#111111]">
    <div class="min-h-screen bg-white flex flex-col">
      <Header active="home" />

      <!-- CONTENT -->
      <main class="flex-1">
        <Herohome />
        <Overview />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue"
import Herohome from "../components/herohome.vue"
import Overview from "../components/overview.vue"
import Footer from "../components/footer.vue"
</script>
