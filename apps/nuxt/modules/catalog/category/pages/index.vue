<template>
  <div class="p-3">
    <div class="flex">
      <div class="w-1/5 invisible lg:visible">
        <CategoryFilter v-if="children !== null && children !== undefined" :children="children" />
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1540px]">
        <div v-if="productList" v-for="product in productList" :key="product?.uid" class="m-5">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { sdk } from '~/sdk.config';
import ProductCard from '~/modules/catalog/category/components/ProductCard.vue'
import CategoryFilter from '~/modules/catalog/category/components/CategoryFilter.vue'

const routeData = useState<{ type: string, uid: string }>('routeData')

const gql = `children_count children {name uid} products { items { review_count rating_summary uid sku url_rewrites { url } name url_key url_suffix  thumbnail {url} } }`

const customQuery = {
  categorySearch: 'category-search-custom-query',
  metadata: {
    fields: gql
  }
};

const categoryParam = useState('selectedCategory', () => routeData.value.uid)

watch(routeData, () => {
  categoryParam.value = routeData.value.uid
}, { immediate: true, deep: true })

const { data } = await useAsyncData(`category${categoryParam.value}`, async () => await sdk.magento.categorySearch({
  filters: {
    category_uid: {
      in: [categoryParam.value],
    },
  }
}, { customQuery }), { watch: [categoryParam] })

const children = data.value?.data.categoryList?.[0].children
const productList = computed(() => data.value?.data?.categoryList?.[0]?.products?.items)
</script>
