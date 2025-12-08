<template>
  <section class="px-8 py-20 bg-[#e6f7f4]">
    <div class="max-w-4xl mx-auto bg-white shadow-xl rounded-xl border border-gray-200">

      <!-- HEADER -->
      <div class="flex justify-between items-center bg-gray-100 px-6 py-4 rounded-t-xl">
        <div class="flex items-center gap-3 text-gray-700 font-medium">
          <i class="fa-regular fa-calendar text-lg"></i>
          <p>20 October 2025, at 12:25 PM</p>
        </div>

        <div class="flex items-center gap-3">
          <span class="bg-yellow-300 text-gray-800 text-sm px-4 py-1 rounded-full">
            Pending
          </span>
          <span class="text-gray-500 text-sm">#74erh9fs</span>
        </div>
      </div>

      <!-- BODY CONTENT -->
      <div class="px-6 py-6 space-y-6">

        <!-- CUSTOMER + SHIPPING -->
        <div class="grid grid-cols-2 gap-8">

          <!-- CUSTOMER INFO -->
          <div>
            <h3 class="font-semibold text-gray-700 mb-2">Customer Information</h3>

            <p class="font-bold text-gray-900">Noel Gallagher</p>
            <p class="text-gray-600 text-sm">noelgallagher@gmail.com</p>
            <p class="text-gray-600 text-sm">1234355-12-10</p>
          </div>

            <!-- SHIPPING -->
            <div>
            <h3 class="font-semibold text-gray-700 mb-2">Shipping Address</h3>

            <p class="text-gray-800 font-bold leading-tight">
                Indonesia
            </p>

            <p class="text-gray-600 text-sm leading-tight mt-1">
                Alamat: Jl. apaAjalah
            </p>
            </div>
        </div>
        <hr class="border-gray-300" />
        <!-- ORDER DETAIL -->
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Order Detail</h3>

          <div class="flex justify-between text-gray-900 font-medium">
            <span>Gitar Mainan</span>
            <span>Rp 25.000.000</span>
          </div>

          <p class="text-gray-600 text-sm">Qty: 1</p>

        </div>

        <hr class="border-gray-300" />
        
        <div class="flex justify-between font-semibold text-gray-900">
          <span>Total Amount</span>
          <span>Rp 13.000.000</span>
        </div>

      </div>

    </div>
  </section>
</template>
