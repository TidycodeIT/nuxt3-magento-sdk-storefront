import {sdk} from "~/sdk.config";
import { SortEnum } from "@vue-storefront/magento-types";

export default function () {
    const search = async (term: string) => {
        const {data, pending, refresh} = await useAsyncData('data', async () => {
            console.log('refreshing products',search, term)
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

    const getProductDetails = async (sku: string) => {
        const {data, pending, refresh} = await useAsyncData('data', async () => {
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
        productDetails.value = data.value?.data?.products?.items

        return {
            data: data.value?.data?.products?.items,
            pending,
            refresh
        }
    }
    
    return {
        search,
        getProductDetails
    }
}
