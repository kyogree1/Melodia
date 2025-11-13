<template>
  <div class="min-h-screen bg-[#E8FAF3]">
    <Header active="contact" />
    <ContactHero />

    <section class="py-16 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        <!-- LEFT -->
        <div>
          <h2 class="text-2xl font-bold mb-8">Contact Information</h2>

          <div class="flex gap-4 mb-8">
            <div class="p-3 bg-green-200 rounded-full">
              <i class="fa-solid fa-location-dot text-green-600 text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold">Store Address</h3>
              <p class="text-sm text-gray-700 mt-1">
                Jl. Mawar Raya No. 123<br />
                Jakarta Selatan 12345<br />
                Indonesia
              </p>
            </div>
          </div>

          <div class="flex gap-4 mb-8">
            <div class="p-3 bg-green-200 rounded-full">
              <i class="fa-solid fa-phone text-green-600 text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold">Phone</h3>
              <p class="text-sm text-gray-700 mt-1">
                Phone: (021) 1234-5678<br />
                WhatsApp: +62 812-3456-7890<br />
                SMS: +62 812-3456-7890
              </p>
            </div>
          </div>

          <div class="flex gap-4 mb-8">
            <div class="p-3 bg-green-200 rounded-full">
              <i class="fa-solid fa-envelope text-green-600 text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold">Email</h3>
              <p class="text-sm text-gray-700 mt-1">
                General: melodia@gmail.com<br />
                Support: supportmelodia@gmail.com<br />
                Social: @melodiashop
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="p-3 bg-green-200 rounded-full">
              <i class="fa-solid fa-clock text-green-600 text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold">Business Hours</h3>
              <p class="text-sm text-gray-700 mt-1">
                Mon–Fri: 9:00 AM – 8:00 PM<br />
                Saturday: 10:00 AM – 6:00 PM<br />
                Closed on Sunday
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div>
          <h2 class="text-2xl font-bold mb-8">Send A Message</h2>

          <div class="space-y-5">
            <TextInput label="Your Name" v-model="name" />
            <TextInput label="Email" type="email" v-model="email" />
            <TextInput label="Subject" v-model="subject" />
            <TextArea label="Message" rows="6" v-model="message" />

            <button
              class="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-2 
                     rounded-md w-full md:w-40 transition mx-auto block">
              Submit
            </button>
          </div>
        </div>
        <div class="bg-gray-200 py-10 px-6 rounded-lg shadow-md">
  <h3 class="text-xl font-semibold text-center mb-4">Our Store</h3>

        <div class="flex justify-center">
            <iframe
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=twin%20tower%20usa&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            class="w-[300px] h-[225px] md:w-[500px] md:h-[300px] rounded-lg shadow"
            style="border:0;"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Component sesuai nama file kamu:
import Header from "../components/Header.vue";
import Footer from "../components/footer.vue";
import ContactHero from "../components/herocontact.vue";
import TextInput from "../components/textinput.vue";
import TextArea from "../components/textarea.vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
</script>