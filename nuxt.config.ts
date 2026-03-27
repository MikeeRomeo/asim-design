import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/'], // only prerender homepage (crawler will still find others)
      ignore: ['/200.html', '/404.html'],
    },
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
