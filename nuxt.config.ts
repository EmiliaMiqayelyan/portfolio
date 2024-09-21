// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-primevue'
  ],

  primevue: {
    cssLayerOrder: 'reset, primevue'
  },

  css: [
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})
