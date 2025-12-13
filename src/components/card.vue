  <template>
    <article
      class="bg-white rounded-2xl shadow-md hover:shadow-lg transition 
            flex flex-col max-w-[240px] w-full">

      <div class="w-full aspect-[5/5] overflow-hidden rounded-t-2xl">
        <img 
          :src="localImage" 
          :alt="title" 
          class="w-full h-full object-cover"
        />
      </div>

      <div class="p-4">
        <div class="text-xs text-emerald-600 font-semibold">{{ brand }}</div>

        <h3 class="text-sm font-semibold text-gray-900 leading-snug mt-1">
          {{ title }}
        </h3>

        <div class="flex justify-between items-center mt-3">
          <p class="text-base font-bold text-gray-900">Rp{{ formattedPrice }}</p>
          <span class="text-xs text-gray-500">Stok: {{ stock }}</span>
        </div>

        <!-- button -->
        <button
          class="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white 
                text-sm font-medium py-2 rounded-full"
          @click="emit('buy', { image, brand, title, price, stock })"
        >
          Add to Cart
        </button>
      </div>
    </article>
  </template>

  <script setup>
  import { computed } from "vue";

  const props = defineProps({
    image: String,
    brand: String,
    title: String,
    price: Number,
    stock: Number
  });

  const localImage = computed(() =>
    new URL(`../assets/image/${props.image}`, import.meta.url).href
  );

  const formattedPrice = computed(() =>
  props.price.toLocaleString("id-ID")
);

  function addtocart() {
  alert("Item berhasil ditambahkan ke keranjang!");
  }

  const emit = defineEmits(["buy"])
</script>

