<template>
  <section class="flex items-center gap-8 flex-wrap p-6 mb-4 md:mb-8">
    <div>
      <ProductVerticalGallery v-if="productDetails.data && product.data" :productDetails="productDetails.data" :product="product.data"
        class="!w-auto" />
    </div>
    <ProductDetailsCard :productDetails="productDetails.data" :product="product.data" />
    <div v-if="product.data?.review_count" class="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
      <ProductReviews :product-reviews="product.data?.reviews" />
    </div>
  </section>
</template>


<script lang="ts" setup>
import ProductDetailsCard from "~/modules/catalog/product/components/ProductDetailsCard.vue";
import ProductVerticalGallery from "~/modules/catalog/product/components/ProductVerticalGallery.vue";
import ProductReviews from "~/modules/catalog/product/components/ProductReviews.vue";

const { getProductDetails, getProduct } = useProduct()

const routeData = useState<{ sku: string, type: string }>('routeData')
const sku = routeData.value.sku
const productDetails = await getProductDetails(sku)
const product = await getProduct(sku)

</script>
