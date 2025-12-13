<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-6xl p-4 flex flex-col gap-4 mt-6">

      <!-- SEARCH -->
      <input
        v-model="search"
        @input="emit('search', search)"
        placeholder="Search instrument..."
        class="w-full bg-white p-3 rounded-xl shadow text-sm outline-none"
      />

      <!-- SORT -->
      <select
        v-model="sort"
        @change="emit('sort', sort)"
        class="w-full bg-white p-3 rounded-xl shadow text-sm outline-none"
      >
        <option value="none">all</option>
        <option value="low-high">Harga Terendah → Tertinggi</option>
        <option value="high-low">Harga Tertinggi → Terendah</option>
      </select>

    </div>
  </div>
</template>



  <script setup>
  import { ref } from "vue"
  const emit = defineEmits(["search", "sort"])

  const search = ref("")
  const sort = ref("none")
  </script>
