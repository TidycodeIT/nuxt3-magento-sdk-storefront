import {Product, ProductInterface} from '@vue-storefront/magento-types';
import {sdk} from "~/sdk.config";

export const useCart = () => {
    const addToCart = async (product: Product, quantity: number) => {
        console.log(product)
        if (product.sku) {
            const {data, pending, refresh} = await useAsyncData('data', async () => {
                console.log('refreshing products')
                return await sdk.magento.addProductsToCart({
                    cartId: "",
                    cartItems: {
                        // @ts-ignore
                        sku: product.sku,
                        quantity
                    }
                })
            })
        }

    }
    //return ref()
    return {
        addToCart
    }
}
