// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss"
  ],
  app: {
    pageTransition: {
      name: 'slide-right',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide-left',
      mode: 'out-in' // default
    }
  }
})
