import pkg from './package'

export default {
  mode: 'universal',
    router: {
      base: '/timeforbooze/',
  },
  transition: 'transition',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'application-name', content:'&nbsp;'},
      { name: 'msapplication-TileColor', content:'#FFFFFF'},
      { name: 'msapplication-TileImage', content:'mstile-144x144.png'},
      { name: 'msapplication-square70x70logo', content:'mstile-70x70.png'},
      { name: 'msapplication-square150x150logo', content:'mstile-150x150.png'},
      { name: 'msapplication-wide310x150logo', content:'mstile-310x150.png'},
      { name: 'msapplication-square310x310logo', content:'mstile-310x310.png'}
    ],
    link: [
        { rel: 'apple-touch-icon-precomposed', sizes:"57x57", href: './apple-touch-icon-57x57.png' },
        { rel: 'apple-touch-icon-precomposed', sizes:"114x114", href: './apple-touch-icon-114x114.png' },
        { rel: 'apple-touch-icon-precomposed', sizes:"72x72", href: './apple-touch-icon-72x72.png' },
        { rel: 'apple-touch-icon-precomposed', sizes:"144x144", href: './apple-touch-icon-144x144.png' },
        { rel: 'apple-touch-icon-precomposed', sizes:"60x60", href: './apple-touch-icon-60x60.png' },
        { rel: 'apple-touch-icon-precomposed', sizes:"120x120", href: './apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon-precomposed', sizes:"76x76", href: './apple-touch-icon-76x76.png' },
        { rel: 'apple-touch-icon-precomposed', sizes:"152x152", href: './apple-touch-icon-152x152.png' },
        { rel: 'icon', type: 'image/png', href: './favicon-196x196.png' },
        { rel: 'icon', type: 'image/png', href: './favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', href: './favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', href: './favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', href: './favicon-128.png' },
        { rel: 'icon', type: 'image/x-icon', href: './favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
    plugins: [
        // { src: '~/plugins/searchPlugin.js', ssr: false }
    ],

  /*
  ** Nuxt.js modules
  */
    modules: [
        'nuxt-fontawesome',
        //OR like this
        ['nuxt-fontawesome', {
            component: 'icon',
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['fas']
                }
            ]
        }]
    ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
