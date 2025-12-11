<template>
    <div>
      <Header active="about" />
      <heroabout 
      :image="aboutImg"
      title="About Melodia"
      description="Since 1800, Melodia has been a trusted destination for musicians around the world — offering premium instruments and accessories that inspire creativity and elevate every performance. We are dedicated to helping artists find their sound, no matter where their journey begins.  "
      />

      <section class="bg-[#e6f7f4] px-8 py-20">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <h2 class="text-3xl font-bold text-[#0b3b4c] mb-4">Our Vision</h2>
            <p class="text-gray-700 leading-relaxed">
              To become the world’s most complete and trusted music store — 
              empowering musicians everywhere to reach their full potential 
              through high-quality instruments and exceptional service.
            </p>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-[#0b3b4c] mb-4">Our Mission</h2>
            <p class="text-gray-700 leading-relaxed">
              To make authentic, world-class musical instruments accessible to 
              everyone, provide professional guidance, and build a global 
              community of passionate musicians connected by the love of music.
            </p>
          </div>

        </div>
      </section>

    <!-- STATS SECTION -->
    <section class="bg-[#e6f7f4] px-8 pb-20">
        <div class="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <!-- CARD 1 -->
        <div class="bg-white rounded-3xl shadow-lg px-8 py-10 text-center">
            <div
            class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#35c98f]/20 flex items-center justify-center">
            <img 
            src="../assets/image/medal.png"
            class="w-7 h-7"/>
        </div>

        <p class="text-xs font-semibold text-gray-800">100+ Years</p>
        <p class="mt-2 text-xs text-gray-600">
            Experience supporting musicians worldwide
        </p>
    </div>

        <div class="bg-white rounded-3xl shadow-lg px-8 py-10 text-center">
            <div
            class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#35c98f]/20 flex items-center justify-center">
            <img 
            src="../assets/image/people.png"
            class="w-7 h-7"/>
        </div>

        <p class="text-xs font-semibold text-gray-800">1 Million+</p>
        <p class="mt-2 text-xs text-gray-600">
            Happy customers across the globe
        </p>
    </div>

        <div class="bg-white rounded-3xl shadow-lg px-8 py-10 text-center">
            <div
            class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#35c98f]/20 flex items-center justify-center">
            <img 
            src="../assets/image/love.png"
            class="w-7 h-7"/>
        </div>

        <p class="text-xs font-semibold text-gray-800">100%</p>
        <p class="mt-2 text-xs text-gray-600">
            Authentic products with official warranty
        </p>
    </div>
  </div>
</section>


        <!-- WHY CHOOSE US -->
    <section class="px-8 py-20 bg-white">
    <div class="max-w-6xl mx-auto bg-[#0e9778] text-white p-10 rounded-3xl">

        <h2 class="text-3xl font-bold mb-8">Why Choose Us?</h2>

        <div class="grid md:grid-cols-2 gap-10">

        <!-- Feature 1 -->
        <div class="flex items-start gap-4">
            <i class="fa-solid fa-badge-check text-3xl"></i>
            <div>
            <h3 class="font-semibold mb-1">Genuine Product</h3>
            <p class="text-sm opacity-80">
                Every product is 100% authentic and sourced directly from official global distributors.
            </p>
            </div>
        </div>

        <!-- Feature 2 -->
        <div class="flex items-start gap-4">
            <i class="fa-solid fa-shield-halved text-3xl"></i>
            <div>
            <h3 class="font-semibold mb-1">Official Warranty</h3>
            <p class="text-sm opacity-80">
                All items include official brand warranties — ensuring your investment is protected.
            </p>
            </div>
        </div>

        <!-- Feature 3 -->
        <div class="flex items-start gap-4">
            <i class="fa-solid fa-people-group text-3xl"></i>
            <div>
            <h3 class="font-semibold mb-1">Professional Team</h3>
            <p class="text-sm opacity-80">
                Our expert team is always ready to provide personalized advice and support for musicians of all levels.
            </p>
            </div>
        </div>

        <!-- Feature 4 -->
        <div class="flex items-start gap-4">
            <i class="fa-solid fa-tags text-3xl"></i>
            <div>
            <h3 class="font-semibold mb-1">Best Price Guarantee</h3>
            <p class="text-sm opacity-80">
                Enjoy competitive global pricing and exclusive promotions for every musician’s budget.
            </p>
            </div>
        </div>

        </div>

    </div>
    </section>
    <Footer />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import heroabout from '../components/hero.vue'
import Footer from '../components/footer.vue'
import aboutImg from '../assets/image/aboutmelodia.png'

</script>
