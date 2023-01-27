// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: "Nuxt Test Blog",
      meta: [
          { charset: 'utf-16' },
          {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
          },
          { hid: 'description', name: 'description', content: 'Some description about the blog' },
          { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss"
  ],
  
  runtimeConfig: {
    public: {
      wpApiUrl: process.env.WP_URI,
    },
  },
})
