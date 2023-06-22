import { sdk } from "~/sdk.config"

export default defineNuxtRouteMiddleware(async (to, from) => {
  const mageRoute = await sdk.magento.route({ url: to.path })
  const routeData = {
    type: mageRoute?.data?.route?.type,
    sku: mageRoute?.data?.route?.sku,
    uid: mageRoute?.data?.route?.uid,
  }
  useState('routeData', () => routeData)
})
