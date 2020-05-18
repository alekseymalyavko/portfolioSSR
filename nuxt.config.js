module.exports = {
  /*
  ** Headers of the page
  */
  server: {
    port: process.env.PORT || 8000,
  },
  head: {
    title: 'Portfolio page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio page, created with ssr' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: 'components/loading.vue',
  css: [
    'assets/main.css'
  ],
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        return window.scrollTo({ top: el.offsetTop - 30, behavior: 'smooth' })
      }

      return { x: 0, y: 0 }
    }
  },
  plugins: [    
    { src: "~/plugins",
      mode: 'client'
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
   transpile: ['vue-agile'],
   vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}