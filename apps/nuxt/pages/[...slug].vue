<template>
  <div>
    <component :is="type" v-if="type" />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const CATEGORY = markRaw(defineAsyncComponent(() =>
  import('~/modules/catalog/category/pages/index.vue')
  )
)

const PRODUCT = markRaw(defineAsyncComponent(() =>
  import('~/modules/catalog/product/pages/index.vue')
  )
)

const routeType = useState<{ type: string }>('routeData')?.value?.type
const type = ref();

if (routeType == 'PRODUCT') {
  type.value = PRODUCT
}

if (routeType == 'CATEGORY') {
  type.value = CATEGORY
}
</script>


