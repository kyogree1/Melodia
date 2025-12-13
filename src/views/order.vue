<template>
  <div class="min-h-screen flex flex-col bg-[#E8FAF3]">
    <Header active="order" />

    <!-- CONTENT -->
    <main class="flex-1">
      <HeroOrder
        :image="Ordering"
        title="Order History"
        description="See all your orders in one place. Track status, view details, and manage your purchases with ease."
      />

      <Ordercard :orders="orders" />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue"
import HeroOrder from "../components/hero.vue"
import Ordercard from "../components/Ordercard.vue"
import Footer from "../components/footer.vue"
import Ordering from "../assets/image/package.png"
import { ref, onMounted } from "vue"
import { getOrders } from "../utils/order"

const orders = ref([])

onMounted(() => {
  orders.value = getOrders()
})

</script>
