<template>
    <Header active="aboutme" />
    <overview/>
    <section class="bg-[#e6f7f4] px-8 pb-20">
        <div class="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- CARD 1 -->
        <div class="bg-white rounded-3xl shadow-lg px-8 py-10 text-center">
            <div
            class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#35c98f]/20 flex items-center justify-center">
            <img 
            src="../assets/image/medal.png"
            class="w-7 h-7"/>
        </div>

        <p class="text-xs font-semibold text-gray-800">Raja Ngoding</p>
        <p class="mt-2 text-xs text-gray-600">
            Bismmillah Bisa Ngoding
        </p>
    </div>

        <div class="bg-white rounded-3xl shadow-lg px-8 py-10 text-center">
            <div
            class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#35c98f]/20 flex items-center justify-center">
            <img 
            src="../assets/image/people.png"
            class="w-7 h-7"/>
        </div>

        <p class="text-xs font-semibold text-gray-800">RamahTerhadapSesama</p>
        <p class="mt-2 text-xs text-gray-600">
            RamahLingkungan
        </p>
    </div>

        <div class="bg-white rounded-3xl shadow-lg px-8 py-10 text-center">
            <div
            class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#35c98f]/20 flex items-center justify-center">
            <img 
            src="../assets/image/love.png"
            class="w-7 h-7"/>
        </div>

        <p class="text-xs font-semibold text-gray-800">CintaDamai</p>
        <p class="mt-2 text-xs text-gray-600">
            CInta damai dan Lingkungan
        </p>
    </div>
  </div>
</section>
    <Footer/>
    
</template>

<script setup>
import Header from '../components/Header.vue'
import overview from '../components/overviewAboutUs.vue';
import Footer from '../components/footer.vue'


</script>