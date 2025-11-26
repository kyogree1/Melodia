<template>
  <section
    :id="id"
    class="px-8 py-24 text-white"
    :class="bgClass"
  >
    <div class="max-w-3xl mx-auto">

      <!-- TITLE -->
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
        {{ title }}
        <span v-if="highlight" class="block text-emerald-300">{{ highlight }}</span>
      </h1>

      <!-- SUBTITLE -->
      <p
        v-if="subtitle"
        class="mt-6 text-lg text-slate-100 leading-relaxed"
      >
        {{ subtitle }}
      </p>

      <!-- BUTTON -->
      <button
        v-if="buttonText"
        class="group mt-10 bg-white text-black flex items-center justify-between
               px-6 py-4 rounded-xl w-full md:w-[600px]
               shadow-lg text-base font-medium transition"
      >
        {{ buttonText }}

        <span
          class="h-9 w-9 bg-black rounded-full flex items-center justify-center
                 transition-transform duration-300 group-hover:translate-x-1"
        >
          <img
            v-if="buttonIcon"
            :src="buttonIcon"
            class="w-4 h-4 invert"
          />
        </span>
      </button>

    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, default: "hero" },
  title: { type: String, required: true },
  highlight: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  buttonText: { type: String, default: "" },
  buttonIcon: { type: String, default: "" },
  bgClass: {
    type: String,
    default: "bg-gradient-to-b from-[#192642] via-[#138d7d] to-[#30c46f]",
  },
});
</script>
