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
        htmlAttrs: {
            lang: 'en'
        },
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { property: 'og:title', content:"Time for booze webshop"},
            { property: 'og:site_name', content:"webshop timeforbooze"},
            { property: 'og:site', content:"http://24721.hosts1.ma-cloud.nl/timeforbooze/"},
            { property: 'og:type', content:"shop.webshop"},
            { property: 'og:url', content:"http://24721.hosts1.ma-cloud.nl/timeforbooze/"},
            { property: 'og:image', content:"http://paweldokodo.com/dontDeleteThis.png"},
            { property: 'og:description', content: pkg.description},
            { property: 'twitter:image', content:"http://paweldokodo.com/dontDeleteThis.png"},
            { property: 'twitter:title', content:"Time for booze webshop"},
            { property: 'twitter:description', content: pkg.description },
            { property: 'twitter:card', content: 'summary' },
            { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description },
            { hid: 'keyword', name: 'keyword', content: 'timeforbooze' },
            { name: 'msapplication-TileColor', content:'#FFFFFF'},
            { name: 'msapplication-TileImage', content:'favicon/mstile-144x144.png'},
            { name: 'msapplication-square70x70logo', content:'favicon/mstile-70x70.png'},
            { name: 'msapplication-square150x150logo', content:'favicon/mstile-150x150.png'},
            { name: 'msapplication-wide310x150logo', content:'favicon/mstile-310x150.png'},
            { name: 'msapplication-square310x310logo', content:'favicon/mstile-310x310.png'},
            { name: 'application-name', content:'&nbsp;'}
        ],
        link: [
            { rel: 'apple-touch-icon-precomposed', sizes:"57x57", href: './favicon/apple-touch-icon-57x57.png' },
            { rel: 'apple-touch-icon-precomposed', sizes:"114x114", href: './favicon/apple-touch-icon-114x114.png' },
            { rel: 'apple-touch-icon-precomposed', sizes:"72x72", href: './favicon/apple-touch-icon-72x72.png' },
            { rel: 'apple-touch-icon-precomposed', sizes:"144x144", href: './favicon/apple-touch-icon-144x144.png' },
            { rel: 'apple-touch-icon-precomposed', sizes:"60x60", href: './favicon/apple-touch-icon-60x60.png' },
            { rel: 'apple-touch-icon-precomposed', sizes:"120x120", href: './favicon/apple-touch-icon-120x120.png' },
            { rel: 'apple-touch-icon-precomposed', sizes:"76x76", href: './favicon/apple-touch-icon-76x76.png' },
            { rel: 'apple-touch-icon-precomposed', sizes:"152x152", href: './favicon/apple-touch-icon-152x152.png' },
            { rel: 'icon', type: 'image/png', href: './favicon/favicon-196x196.png' },
            { rel: 'icon', type: 'image/png', href: './favicon/favicon-96x96.png' },
            { rel: 'icon', type: 'image/png', href: './favicon/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', href: './favicon/favicon-16x16.png' },
            { rel: 'icon', type: 'image/png', href: './favicon/favicon-128.png' },
            { rel: 'icon', type: 'image/x-icon', href: './favicon/favicon.ico'}
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
        ['nuxt-netlify-http2-server-push', {
                // Specify relative path to the dist directory and its content type
                resources: [
                    { path: '**/*.js', as: 'script' },
                    { path: '*.jpg', as: 'image' },
                    { path: '*.png', as: 'image' },
                    { path: '*.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
                    { path: '*.otf', as: 'font', type: 'font/otf', crossorigin: 'anonymous' },
                ]
            }
        ],
        ["nuxt-compress"],
        ['nuxt-fontawesome', {
            component: 'icon',
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['fas']
                }
            ]
        }],
        '@bazzite/nuxt-optimized-images',
        '@nuxtjs/sitemap'
    ],
    optimizedImages: {
        optimizeImages: true
    },
    sitemap: {
        hostname: 'http://24721.hosts1.ma-cloud.nl/timeforbooze/',
        gzip: true,
        exclude: [
            '/_nuxt/**'
        ],
        routes: [
            {
                url: '/',
                changefreq: 'never',
                priority: 1,
                lastmodISO: '2019-06-26T13:30:00.000Z'
            },
            {
                url: '/booze',
                changefreq: 'never',
                priority: .5,
                lastmodISO: '2019-06-26T13:30:00.000Z'
            },
            {
                url: '/booze/beer/',
                changefreq: 'never',
                priority: .25,
                lastmodISO: '2019-06-26T13:30:00.000Z'
            },
            {
                url: '/booze/wine/',
                changefreq: 'never',
                priority: .25,
                lastmodISO: '2019-06-26T13:30:00.000Z'
            },
            {

                url: '/booze/mix/',
                changefreq: 'never',
                priority: .25,
                lastmodISO: '2019-06-26T13:30:00.000Z'
            },
            {
                url: '/booze/rum/',
                changefreq: 'never',
                priority: .25,
                lastmodISO: '2019-06-26T13:30:00.000Z'
            },
            {
                url: '/about/',
                changefreq: 'never',
                priority: .8,
                lastmodISO: '2019-06-26T13:30:00.000Z'
            },
            {
                url: '/cocktail/',
                changefreq: 'never',
                priority: .5,
                lastmodISO: '2019-06-26T13:30:00.000Z'
            }
        ]
    },

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
