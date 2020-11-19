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
  ssr: false,
  target: 'static',
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
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
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
    optionsPath: '@/plugins/vuetify.ts',
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Roboto'
      },
      icons: 'mdi'
    }
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
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: 'test',
        maxSize: 256000
      }
    }
  }
}
