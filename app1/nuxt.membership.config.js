export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 4001, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  srcDir: __dirname,
  buildDir: '.nuxt/membership',
  head: {
    server: {
      port: 4001, // default: 3000
      host: '0.0.0.0', // default: localhost,
      timing: false
    },
    title: 'membership',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'membership',
        path: '/membership',
        component: resolve(__dirname, 'components/membership.vue')
      })
    }
  },
  serverMiddleware: ['~/api/membership/server.js'],
}
