const isDev = process.env.NODE_ENV !== 'production';
const BASE_URL = isDev ? 'http://localhost:8000' : 'https://aleks-malyavko-site.herokuapp.com';

process.noDeprecation = true;

module.exports = {
  mode: 'universal',
  ...(!isDev && {
    modern: 'client'
  }),
  env: {
    baseUrl: process.env.BASE_URL || BASE_URL
  },
  server: {
    port: process.env.PORT || 8000,
  },
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Aleks Malyako | Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0abc5c'},
      { name: 'google-site-verification', content: 'cXVFVrN_bN4YTo5u98cBSc4hAC93G9a7hO_oVkLJOnI'},
      { name: 'yandex-verification', content: '40a5011ae7f8dc31'},
      { hid: 'description', name: 'description', content: 'Hire Professional Freelancer VueJS / ReactJS Developer. Building applications & websites, design UX/UI, creating animations and interactive experiences.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/images/icon.png' },
      { rel: 'apple-touch-icon', href: '/images/icon.png' },
      { rel: 'shortcut icon', type: 'image/png', href: '/images/icon.png' },
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(
          {
            '@context': 'http://schema.org',
            '@type': 'Person',
            'address': {
              '@type': 'PostalAddress',
              'addressCountry': 'BLR',
              'addressLocality': 'Minsk'
            },
            'name': 'Aleks Malyako',
            'image': 'https://www.aleksmalyavko.site/images/me1.png',
            'email': 'mailto:aleksmalyavko@gmail.com',
            'url': 'https://www.aleksmalyavko.site',
            'jobTitle': 'Software Engineer',
            'sameAs': [
              'https://www.aleksmalyavko.site',
              'https://github.com/alekseymalyavko',
              'https://linkedin.com/in/aleks-malyavko-8b745b1ab'
            ]
          }
        )
      }
    ]
  },
  meta: {
    name: 'Aleks Malyako | Software Engineer',
    description: 'Hire Professional Freelancer VueJS / ReactJS Developer. Building applications & websites, design UX/UI, creating animations and interactive experiences.',
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    author: 'Aleks Malyako',
    twitterCard: 'summary',
    ogHost: 'https://www.aleksmalyavko.site',
    ogImage: {
      path: '/images/icon-192.png'
    }
  },
  rootDir: __dirname,
  manifest: {
    name: 'Aleks Malyako Site',
    short_name: 'Aleks Malyako',
    icons: [
      {
        'src': '/images/icon-512.png',
        'sizes': '512x512',
        'type': 'image/png'
      },
      {
        'src': '/images/icon-192.png',
        'sizes': '192x192',
        'type': 'image/png'
      },
      {
        'src': '/images/icon-64.png',
        'sizes': '64x64',
        'type': 'image/png'
      }
    ],
    start_url: '/',
    display: 'standalone',
    background_color: '#000a14',
    theme_color: '#0abc5c'
  },
  serverMiddleware: [
    'redirect-ssl',
    '~/api/index'
  ],
  loading: { color: 'var(--active)', height: '3px', throttle: 0 },
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
    { 
      src: '~/plugins',
      mode: 'client'
    }
  ],
  modules: [
    ['@nuxtjs/axios', { baseURL: '/api/' }],
    [
      '@naumstory/nuxtjs-yandex-metrika',
      {
        id: '64463779',
        webvisor: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      }
    ]
  ],
  buildModules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', 
      {
        id: 'UA-167804682-2'
      }
    ]
  ],
  build: {
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: !isDev
    },
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: ['advanced', {
              reduceIdents: false,
              autoprefixer: false,
              cssDeclarationSorter: false,
              zindex: false,
              discardComments: {
                removeAll: true
              }
            }]
          }
        })
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true
        }
      }),

      order: 'cssnanoLast'
    },
   transpile: ['vue-agile'],
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