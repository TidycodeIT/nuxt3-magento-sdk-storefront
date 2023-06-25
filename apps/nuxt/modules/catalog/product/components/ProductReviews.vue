<template>
  <article class="w-full p-4 border rounded-md" v-for="(productReview, index) in productReviewItems" :key="index">
    <header class="flex flex-col items-start pb-4 md:flex-row md:justify-between">
      <div class="flex items-start">
        <div class="flex-col">
          <span class="text-sm text-neutral-900">{{ productReview.userName }}</span>
          <span class="flex items-center pr-2 text-xs text-neutral-500">
            <SfRating :half-increment="true" :value="productReview.averageRating" :max="MAX_AVERAGE_RATING" size="xs" class="mr-2" />
            {{ productReview.createdAt }}
          </span>
        </div>
      </div>
    </header>
    <div class="text-sm text-neutral-900">{{ productReview.text }}</div>
  </article>
</template>

<script lang="ts" setup>
import { MAX_AVERAGE_RATING, RATING_CONVERSION_FACTOR, FALLBACK_RATING } from '~/helper/constants'

import { SfRating } from '@storefront-ui/vue';
import { ProductReviews } from '@vue-storefront/magento-types';
const props = defineProps<{ productReviews: ProductReviews }>()

const productReviewItems = computed(() => props.productReviews?.items.map(item => ({
  userName: item?.nickname,
  averageRating:(item?.average_rating || FALLBACK_RATING)/RATING_CONVERSION_FACTOR,
  createdAt: item?.created_at ? new Date(item.created_at).toDateString(): '',
  text: item?.text,
  summary: item?.summary
}))) 
</script>
