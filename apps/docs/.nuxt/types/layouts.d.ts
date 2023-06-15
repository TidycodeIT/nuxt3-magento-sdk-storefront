import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "api-reference" | "default" | "fullscreen"
declare module "/Users/richardrohrig/m2/nuxt3-magento-sdk-storefront/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}