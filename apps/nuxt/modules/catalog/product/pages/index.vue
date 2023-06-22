<template>
  <section class="flex items-center gap-8 flex-wrap p-6">
    <div>
      <!-- <div>
        Product: {{ product }}
      </div>
      <div>
        Product Details: {{ productDetails }}
      </div> -->
      
      <ProductVerticalGallery v-if="productDetails.data && product.data" :productDetails="productDetails.data" :product="product.data"
        class="!w-auto" />
    </div>
    <ProductDetailsCard :productDetails="productDetails.data" :product="product.data" />
  </section>
</template>


<script lang="ts" setup>
import ProductDetailsCard from "~/modules/catalog/product/components/ProductDetailsCard.vue";
import ProductVerticalGallery from "~/modules/catalog/product/components/ProductVerticalGallery.vue";

const { getProductDetails, getProduct } = useProduct()

const routeData = useState<{ sku: string, type: string }>('routeData')
const sku = routeData.value.sku
const productDetails = await getProductDetails(sku)
const product = await getProduct(sku)

</script>
