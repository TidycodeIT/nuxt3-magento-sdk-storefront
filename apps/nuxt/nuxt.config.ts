// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    private: {
      magentoBaseUrl: process.env.MAGENTO_BASE_URL,
      imageProvider: process.env.NUXT_IMAGE_PROVIDER,
    },
    public: {
      demoContent: process.env.VSF_DEMO_CONTENT,
      pageBuilder: process.env.VSF_PAGE_BUILDER_MODULE
    }
  }
})
