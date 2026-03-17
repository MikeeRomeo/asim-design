import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  nitro: {
    preset: 'github_pages',
  },
  compatibilityDate: '2025-07-15',
  modules: ['@vueuse/nuxt', 'vue3-carousel-nuxt'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
