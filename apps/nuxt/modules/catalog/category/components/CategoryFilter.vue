<template>
  <div class="w-full md:max-w-[376px]">
    <h6 class="bg-neutral-100 mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest">
      Sort by
    </h6>
    <div class="px-4">
      <SfSelect v-model="selected" aria-label="Sort by">
        <option :value="null">all</option>
        <option v-for="option in selectOptions" :key="option?.uid" :value="option?.uid">
          {{ option?.name }}
        </option>
      </SfSelect>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfSelect } from '@storefront-ui/vue';
import { CategoryTree } from '@vue-storefront/magento-types';

type Props = {
  children?: CategoryTree
}

const options = defineProps<Props>()
const selectOptions = options.children
const selected = ref();
const selectedCategory = useState('selectedCategory')

watch(selected, value => {
  console.log(`cat-filer ${value}`)
  selectedCategory.value = value
})

</script>
