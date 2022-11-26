// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
    css: [
        // "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.min.css",
        "~/assets/css/main.css"
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    plugins: [
        {
            src: "@/plugins/particles.js",
            mode: "client",
            // ssr: false,
        },
    ],
    build: {
        // transpile: ['vuetify', 'swiper']
        // transpile: ['gsap', 'swiper']
        // transpile: ['swiper']
    },
    modules: [
      '@nuxtjs/color-mode',
      '@nuxt/image-edge',
    ],
    image: {
        dir: 'assets/photos'
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
    app: {
        pageTransition: { name: "fade", mode: "out-in" },
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            charset: "utf-16",
            viewport: "width=device-width, initial-scale=1.0",
            title: "Yuka Kohinata",
            meta: [
                // <meta name="description" content="My amazing site">
                { name: "Yuka Kohinata", content: "Yuka Kohinata Profile" },
            ],
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.ico" },
            ],
            script:[
                { src: 'https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js', defer: true },
            ]
        },
    },
})
