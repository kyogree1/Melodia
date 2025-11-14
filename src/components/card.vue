<template>
  <div>
    <section class="bg-white px-8 py-14">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-sm">

        <div class="flex flex-col items-center gap-3">
          <i class="fa-solid fa-shield-halved text-3xl text-emerald-500"></i>
          <h4 class="font-semibold text-gray-800">Official Warranty</h4>
          <p class="text-xs text-gray-500">
            All instruments come with official warranty.
          </p>
        </div>

        <div class="flex flex-col items-center gap-3">
          <i class="fa-solid fa-credit-card text-3xl text-emerald-500"></i>
          <h4 class="font-semibold text-gray-800">Secure Payment</h4>
          <p class="text-xs text-gray-500">
            Trusted and protected payment system.
          </p>
        </div>

        <div class="flex flex-col items-center gap-3">
          <i class="fa-solid fa-truck-fast text-3xl text-emerald-500"></i>
          <h4 class="font-semibold text-gray-800">Free Shipping</h4>
          <p class="text-xs text-gray-500">
            For purchases above Rp 1.000.000.
          </p>
        </div>

        <div class="flex flex-col items-center gap-3">
          <i class="fa-solid fa-certificate text-3xl text-emerald-500"></i>
          <h4 class="font-semibold text-gray-800">Original Products</h4>
          <p class="text-xs text-gray-500">
            100% original from official distributors.
          </p>
        </div>

      </div>
    </section>

    <section class="bg-[#f5f5f5] px-8 pt-12 pb-20">
      <div class="text-center mb-10">
        <p class="text-xs tracking-wide text-gray-500 uppercase font-semibold">
          Featured Product
        </p>
        <h2 class="mt-1 text-2xl font-bold text-gray-900">
          Handpicked instruments for every level
        </h2>
        <p class="text-xs text-gray-500 mt-1">
          From aspiring beginners to seasoned pros.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">

        <article class="bg-white rounded-2xl shadow-md p-5 flex flex-col">
          <div class="w-full h-48 rounded-xl bg-gray-200 overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Guitar 1"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="mt-4 text-xs text-gray-500">Guitar</div>

          <h3 class="text-base font-semibold text-gray-900 leading-snug">
            1957 Les Paul Junior Single Cut Relic’d, Heavy Aged
          </h3>

          <p class="text-lg font-bold mt-2 text-gray-800">Rp 5.000.000</p>

          <button class="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-2 rounded-full">
            Check
          </button>
        </article>

        <article class="bg-white rounded-2xl shadow-md p-5 flex flex-col">
          <div class="w-full h-48 rounded-xl bg-gray-200 overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Guitar 2"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="mt-4 text-xs text-gray-500">Guitar</div>

          <h3 class="text-base font-semibold text-gray-900 leading-snug">
            1957 Les Paul Junior Single Cut Relic’d, Heavy Aged
          </h3>

          <p class="text-lg font-bold mt-2 text-gray-800">Rp 5.000.000</p>

          <button class="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-2 rounded-full">
            Check
          </button>
        </article>

      </div>

      <div class="mt-12 flex justify-center">
        <button class="px-12 py-2 rounded-full bg-[#4b1f7a] text-white text-sm font-medium hover:bg-[#38145d]">
          See All
        </button>
      </div>
    </section>
  </div>
</template>