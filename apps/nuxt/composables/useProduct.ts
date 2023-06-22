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

        }, {customQuery}))

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

    const getDisplayPrice = (product: Product, locales = 'en-US') => {
        const currency = product.price_range?.minimum_price?.regular_price.currency as string
        const price = product.price_range?.minimum_price?.regular_price.value?.valueOf() as number
        console.log('******** ===  >>>', product.price_range)

        return price ? new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency
        }).format(price) : undefined
    }
    const getThumbnailUrl = (details: any) => {
        return details.thumbnail.url as string ?? ''
    }

    const getProductDescription = (details: any) => {
        return details?.description?.html
    }

    const getLabel = (details: any) => {
        return details.thumbnail.label as string
    }

    const getProductPath = (product: ProductInterface) => {
        if (!product) return '/';
        return `/${product?.url_rewrites?.[0]?.url ?? product.url_key}`;
    };

    return {
        search,
        getProduct,
        getProductDetails,
        getDisplayPrice,
        getThumbnailUrl,
        getProductDescription,
        getLabel,
        getProductPath
    }
}
