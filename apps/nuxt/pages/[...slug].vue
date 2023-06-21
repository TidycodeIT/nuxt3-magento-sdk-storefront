<template>
  <div>
    <component :is="type" v-if="type" />
  </div>
</template>
  
<script lang="ts" setup>
import CATEGORY from '~/modules/catalog/category/pages/index.vue';
import PRODUCT from '~/modules/catalog/product/pages/index.vue';

const category = useState<{ type: string }>('routeData')?.value?.type
const type = ref();

if (category == 'PRODUCT') {
  type.value = PRODUCT
}

if (category == 'CATEGORY') {
  type.value = CATEGORY
}
</script>
  
  
