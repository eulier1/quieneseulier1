// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
      router: {
        base: "/quieneseulier1"
      }
    }
    : {}

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Fira+Code:100,400,700|Lato:100,400,700&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/base"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    // Doc https://github.com/nuxt-community/analytics-module
    ['@nuxtjs/google-analytics', {
      id: 'UA-146932600-1'
    }],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/vuetify'],
  vuetify: {
    optionsPath: '@/plugins/vuetify.ts'
  },
  /*
   ** Build configuration
   */
  ...routerBase,
  /*
  ** Static Files 
  */
  generate: {
    dir: 'docs'
  },
  server: {
    port: 3000,
    host: "192.168.130.188"
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
