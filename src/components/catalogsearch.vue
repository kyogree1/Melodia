<template>
  <div class="w-full flex justify-center px-4 pb-6 mt-5">
    <div class="w-full max-w-6xl flex flex-col gap-4">

      <div class="bg-white flex items-center gap-3 p-3 rounded-xl shadow">
        <img src="../assets/image/search.png" alt="search" class="w-5 h-5 opacity-60" />
        <input
          type="text"
          placeholder="Search instrument..."
          class="flex-1 text-sm outline-none text-gray-700"
        />
      </div>

      <div class="flex gap-4">
        <button
          class="bg-white p-3 rounded-xl shadow flex items-center justify-center w-12"
        >
          <img src="../assets/image/filter.png" alt="filter" class="w-5 h-5 opacity-70" />
        </button>

        <button
          class="bg-white p-3 rounded-xl shadow flex items-center justify-between flex-1"
        >
          <span class="text-gray-700 text-sm">All Category</span>
          <img src="../assets/image/down.png" class="w-4 h-4 opacity-70" />
        </button>

        <button
          class="bg-white p-3 rounded-xl shadow flex items-center justify-between flex-1"
        >
          <span class="text-gray-700 text-sm">Most Popular</span>
          <img src="../assets/image/down.png" class="w-4 h-4 opacity-70" />
        </button>

      </div>
    </div>
  </div>
</template>
