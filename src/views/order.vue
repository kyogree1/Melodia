<template>
    <Header active="order" />
    <HeroOrder 
      :image="Ordering"
      title="Order History"
      description="See all your orders in one place. Track status, view details, and manage your purchases with ease."
      />
    <Ordercard />
    <Footer />
</template>

<script setup>
import Header from '../components/Header.vue';
import HeroOrder from '../components/hero.vue';
import Ordercard from '../components/Ordercard.vue';
import Footer from '../components/footer.vue';
import Ordering from '../assets/image/package.png';
</script>