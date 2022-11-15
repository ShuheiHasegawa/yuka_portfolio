// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
        transpile: ['swiper']
    },
    // buildModules: ['@nuxtjs/color-mode'],

    // buildModules: ["@nuxtjs/tailwindcss"],
    // css: ["@/assets/css/tailwind.css"], // <= ドキュメントからさらに追加

    modules: ['@nuxtjs/color-mode'],
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
    app: {
        pageTransition: { name: "fade", mode: "out-in" },
        head: {
            charset: "utf-16",
            viewport: "width=device-width, initial-scale=1.0",
            title: "Yuka Kohinata",
            meta: [
                // <meta name="description" content="My amazing site">
                { name: "Yuka Kohinata", content: "Yuka Kohinata Profile" },
            ],
            script:[
                { src: 'https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js', defer: true },
            ]
        },
    },
})
