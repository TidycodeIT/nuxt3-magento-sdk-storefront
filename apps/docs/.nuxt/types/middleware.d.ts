import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/richardrohrig/m2/nuxt3-magento-sdk-storefront/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}