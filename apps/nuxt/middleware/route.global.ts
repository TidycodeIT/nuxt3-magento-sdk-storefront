import { sdk } from "~/sdk.config"

export default defineNuxtRouteMiddleware(async (to, from) => {
  const mageRoute = await sdk.magento.route({ url: to.path })
  useState('routeData', () => mageRoute?.data?.route)
})
