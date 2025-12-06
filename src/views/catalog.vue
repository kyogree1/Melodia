  <template>
      <div class="w-full bg-[#f3f0ef] flex flex-col">
        <Header active="catalog"/>
        <HeroCatalog />
        <catalogbar v-model:active="selectedCategory"/>
        <catalogsearch />
        <ProductGrid :category="selectedCategory" />
        <Footer />
      </div>
  </template>

<script setup>
import Header from '../components/Header.vue'
import HeroCatalog from '../components/herocatalog.vue'
import catalogbar from '../components/catalogbar.vue'
import catalogsearch from '../components/catalogsearch.vue'
import ProductGrid from '../components/productgrid.vue'
import Footer from '../components/footer.vue'
import { ref } from "vue";  

const selectedCategory = ref("All")
</script>
