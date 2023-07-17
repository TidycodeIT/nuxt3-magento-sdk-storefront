<template>
    <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
        <div class="relative">
            <SfLink :tag="NuxtLink" :href="productPath">
                <img :src="product.thumbnail?.url ?? ''" alt="Great product"
                    class="block object-cover h-auto rounded-md aspect-square" :width="300" :height="300" />
            </SfLink>
            <SfButton type="button" variant="tertiary" size="sm" square
                class="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
                aria-label="Add to wishlist">
                <SfIconFavorite size="sm" />
            </SfButton>
        </div>
        <div class="p-4 border-t border-neutral-200">
            <SfLink :tag="NuxtLink" :href="`/${product.url_key}${product.url_suffix}`" variant="secondary" class="no-underline">
            {{ product.name }}
            </SfLink>
            <div class="flex items-center pt-1">
                <SfRating :half-increment="true" :value="(product.rating_summary || FALLBACK_RATING)/RATING_CONVERSION_FACTOR" :max="MAX_AVERAGE_RATING" />

                <SfLink :tag="NuxtLink" href="#" variant="secondary" class="pl-1 no-underline">
                    <SfCounter size="xs">{{ product.review_count || FALLBACK_RATING }}</SfCounter>
                </SfLink>
            </div>

            <span class="block pb-2 font-bold typography-text-lg">{{ displayPrice }}</span>
            <div class="flex flex-col">
                <div class="mb-2">
                    <SfButton type="button" size="sm">
                        <template #prefix>
                            <SfIconShoppingCart size="sm" />
                        </template>
                        Add to cart
                    </SfButton>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { MAX_AVERAGE_RATING, FALLBACK_RATING, RATING_CONVERSION_FACTOR } from '~/helpers/constants'
import {
    SfRating,
    SfCounter,
    SfLink,
    SfButton,
    SfIconShoppingCart,
    SfIconFavorite
} from '@storefront-ui/vue';
import { Product } from '@vue-storefront/magento-types';
import { getDisplayPrice, getProductPath } from '~/modules/catalog/product/getters/productGetters'
import {NuxtLink} from "#components";

const props = defineProps<{ product: Product }>()
const product = props.product
const displayPrice = computed(() => getDisplayPrice(product))
const productPath = computed(() => getProductPath(product))
</script>
