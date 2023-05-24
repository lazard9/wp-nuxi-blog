// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*
   * Headers of the page
   */
  app: {
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
        link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css', integrity: 'sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N', crossorigin: 'anonymous' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js', integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj', crossorigin: 'anonymous', defer: '' },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct', crossorigin: 'anonymous', defer: '' },
      ],
    },
  },

  /*
   * Global CSS
   */
  css: [],

  /*
   * Plugins to load before mounting the App
   */

  plugins: [],

  /*
   * Nuxt.js modules
   */
  modules: [
    "@nuxtjs/tailwindcss"
  ],
  
  runtimeConfig: {
    public: {
      wpApiUrl: process.env.WP_URI,
    },
  },
})
