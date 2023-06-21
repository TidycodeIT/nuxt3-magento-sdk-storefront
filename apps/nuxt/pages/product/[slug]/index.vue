<template>
  <section class="flex items-center gap-8 flex-wrap p-6">
  <div>
    {{ productDetails  }}
    <ProductVerticalGallery class="!w-auto" />
  </div>
    <ProductDetails />
  </section>
</template>


<script lang="ts" setup>
import { ProductInterface } from '@vue-storefront/magento-types';

const { getProductDetails } = useProduct()
const slug = useRoute().params.slug as string

// TODO: make it async await
getProductDetails(slug) // Fetch data for specific product

const productDetails = useState<ProductInterface>('productDetails')
</script>