import { sdk } from "~/sdk.config";
import { SortEnum, Product, ProductInterface } from "@vue-storefront/magento-types";

export default function () {
    const search = async (term: string) => {
        const { data, pending, refresh } = await useAsyncData('data', async () => {
            console.log('refreshing products', search, term)
            return await sdk.magento.products({
                pageSize: 8,
                currentPage: 1,
                search: term,
                sort: {
                    price: SortEnum.Asc
                }
            })
        })

        const products = useState('products')
        products.value = data.value?.data.products?.items

        return {
            data: data.value?.data.products?.items,
            pending,
            refresh
        }
    }

    const getProduct = async (sku: string) => {

        const customQuery = {
            products: 'products-custom-query',
            metadata: {
                fields: 'items { sku name media_gallery{ url label position disabled } price_range { minimum_price { regular_price { value currency } }} }'
            }
        };

        const { data, pending, refresh } = await useAsyncData('data', async () => await sdk.magento.products({
            filter: {
                sku: {
                    eq: sku
                }
            },

        }, { customQuery }))

        return {
            data: data?.value?.data?.products?.items?.[0],
            pending,
            refresh

        }
    }

    const getProductDetails = async (sku: string) => {
        const { data, pending, refresh } = await useAsyncData('data', async () => {
            console.log('fetching product by sku', getProductDetails, sku)
            return await sdk.magento.productDetails({
                filter: {
                    sku: {
                        eq: sku
                    }
                },
            })
        })

        const productDetails = useState('productDetails')
        productDetails.value = data.value?.data?.products?.items?.[0]

        return {
            data: data.value?.data?.products?.items?.[0],
            pending,
            refresh
        }
    }

    return {
        search,
        getProduct,
        getProductDetails
    }
}
