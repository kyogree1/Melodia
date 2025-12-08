<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">
    
    <!-- HEADER -->
    <Header active="profile" />

    <!-- MAIN CONTENT -->
    <section class="flex-1 px-6 py-10 flex justify-center">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-md p-8">

        <!-- TITLE -->
        <h1 class="text-2xl font-semibold text-[#0e2036] text-center mb-8">
          My Profile
        </h1>

        <!-- PROFILE INFO -->
        <div class="flex flex-col items-center text-center">
          <div class="w-24 h-24 bg-gray-200 rounded-full overflow-hidden border-2 border-[#0e2036]">
            <img 
              src="../assets/image/noel-gallagher.jpg"
              class="w-full h-full object-cover"
              alt="Profile"
            />
          </div>

          <h2 class="text-xl font-semibold text-gray-800 mt-4">
            {{ user.name }}
          </h2>

          <p class="text-gray-500 text-sm">
            {{ user.email }}
          </p>
        </div>

        <!-- MENU LIST -->
        <div class="mt-10 space-y-3">

          <router-link
            to="/order"
            class="flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition px-4 py-3 rounded-lg"
          >
            <span class="text-gray-700 font-medium">My Orders</span>
            <i class="fa-solid fa-chevron-right text-gray-500 text-sm"></i>
          </router-link>
        </div>

        <!-- LOGOUT BUTTON -->
        <button
          class="mt-10 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg"
          @click="logout"
        >
          Logout
        </button>

      </div>
    </section>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"
import { useRouter } from "vue-router"

const user = {
  name: "User Melodia",
  email: "user@melodia.com"
}

const router = useRouter();

function logout() {
  alert("Logout berhasil! (Frontend only)")
  router.push("/login")
}
</script>
