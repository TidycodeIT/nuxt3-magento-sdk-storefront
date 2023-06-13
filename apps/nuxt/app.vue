<template>
  <div>
    <div>
      <SfButton @click="submit" type="button" class="w-full"> Hello </SfButton>
    </div>
    <div class="flex flex-col align-center">
     <div v-for="product in products" :key="product.uid">
       <div> {{ product.name }} </div>
     </div>
    </div> 
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';
import { ProductInterface } from '@vue-storefront/magento-types';

const {search} = useProduct()
const submit = () => {
    search('watch')
}
const products = useState<ProductInterface[]>('products')

</script>
