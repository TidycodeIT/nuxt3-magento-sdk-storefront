import {Product, ProductInterface} from '@vue-storefront/magento-types';
import {sdk} from "~/sdk.config";


export const useCart = () => {
    const cartIDCookie = useCookie('cart-id')
    const getCartId=async ()=>{
        //TODO implement auth customer
        /*const retrivedCart = sdk.magento.customerCart()
        console.log(retrivedCart)*/
        if(cartIDCookie.value){
            return cartIDCookie.value
        }
        const emptyCart = await sdk.magento.createEmptyCart()
        const cartID = emptyCart.data?.createEmptyCart
        if(cartID){
            cartIDCookie.value = cartID
        }
        return cartIDCookie.value
    }
    const addToCart = async (product: Product, quantity: number=1) => {

        console.log(product)
        if (product.sku) {
            const {data, pending, refresh} = await useAsyncData('data', async () => {
                const cartID = await getCartId()
                if(cartID){

                    return await sdk.magento.addProductsToCart({
                        cartId: cartID,
                        cartItems: [
                            {
                                // @ts-ignore
                                sku: product.sku,
                                quantity:Number(quantity),

                            }
                        ]
                    })
                }
                return undefined
            })
        }

    }
    //return ref()
    return {
        addToCart
    }
}
