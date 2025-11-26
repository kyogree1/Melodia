<template>
    <div class="min-h-screen bg-gradient-to-b from-[#192642] via-[#138d7d] to-[#30c46f] flex items-center justify-center px-6 text-white">
    <div class="bg-[#192642] p-8 rounded-xl shadow-xl w-full max-w-md backdrop-blur-md">

      <img 
        class="mx-auto h-12"
        src="/src/assets/image/logomelodia.png"
        alt="Melodia"
      />

      <h2 class="mt-6 text-center text-2xl font-bold text-white">
        Sign in to your account
      </h2>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        
        <textinput 
          label="Email"
          placeholder="you@example.com"
          v-model="email"
          type="email"
        />

        <textinput 
          label="Password"
          placeholder="••••••••"
          v-model="password"
          type="password"
        />

        <button
          class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md text-sm font-semibold"
        >
          Sign In
        </button>
      </form>

      <p class="mt-6 text-center text-gray-400 text-sm">
        Don't have an account?
        <router-link to="/register" class="text-emerald-400 hover:underline">
          Create one
        </router-link>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import textinput from "../components/textinput.vue";

const email = ref("");
const password = ref("");

const router = useRouter();

const handleLogin = () => {
  // dummy validation
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Email & Password must not be empty!");
    return;
  }

  // save login session
  localStorage.setItem("loggedIn", "true");

  console.log("Logged in:", email.value);

  // redirect ke home
  router.push("/home");
};
</script>
