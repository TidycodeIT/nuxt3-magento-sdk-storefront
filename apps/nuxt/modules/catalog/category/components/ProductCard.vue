<template>
    <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
        <div class="relative">
            <SfLink :href="productPath">
                <img :src="product.thumbnail?.url ?? ''" alt="Great product"
                     class="block object-cover h-auto rounded-md aspect-square" :width="300" :height="300"/>
            </SfLink>
            <SfButton type="button" variant="tertiary" size="sm" square
                      class="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
                      aria-label="Add to wishlist">
                <SfIconFavorite size="sm"/>
            </SfButton>
        </div>
        <div class="p-4 border-t border-neutral-200">
            <SfLink :href="`/${product.url_key}${product.url_suffix}`" variant="secondary" class="no-underline"> {{ product.name }}
            </SfLink>
            <div class="flex items-center pt-1">
                <SfRating size="xs" :value="5" :max="5"/>

                <SfLink href="#" variant="secondary" class="pl-1 no-underline">
                    <SfCounter size="xs">123</SfCounter>
                </SfLink>
            </div>

            <span class="block pb-2 font-bold typography-text-lg">{{ displayPrice }}</span>
            <div class="flex flex-col">
                <div class="mb-2">
                    <SfButton type="button" size="sm">
                        <template #prefix>
                            <SfIconShoppingCart size="sm"/>
                        </template>
                        Add to cart
                    </SfButton>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    SfRating,
    SfCounter,
    SfLink,
    SfButton,
    SfIconShoppingCart,
    SfIconFavorite,
    SfIconInfo
} from '@storefront-ui/vue';
import { ProductInterface } from '@vue-storefront/magento-types';

const props = defineProps<{ product: ProductInterface }>()
const product = props.product
const {getDisplayPrice, getProductPath} = useProduct()
const sku = product.sku as string
const displayPrice = computed(() => getDisplayPrice(product))
const productPath = computed(() => getProductPath(product))
</script>
