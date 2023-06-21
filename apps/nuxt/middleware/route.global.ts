import { sdk } from "~/sdk.config"

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('middleware/path: ', to.path)

  const mageRoute = await sdk.magento.route({ url: to.path })

  console.log('route/middleware', mageRoute?.data?.route)

  useState('routeData', () => mageRoute?.data?.route)

})
