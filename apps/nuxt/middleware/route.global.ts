import {sdk} from "~/sdk.config"
import {RoutableInterface} from "@vue-storefront/magento-types";

interface ExtendedRoutableInterface extends RoutableInterface {
    sku: string | undefined;
    uid: string | undefined;
}

export default defineNuxtRouteMiddleware(async (to, from) => {
    const mageRoute = await sdk.magento.route({url: to.path})
    const route = mageRoute?.data?.route as ExtendedRoutableInterface
    const routeData = {
        type: route?.type,
        sku: route?.sku,
        uid: route?.uid,
    }

    if (routeData.type == null) {
        return;
    }

    useState('routeData', () => routeData)
})
