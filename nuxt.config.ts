// https://content.nuxtjs.org/api/configuration
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxthq/ui',
        '@nuxt/content',
        '@nuxt/image',
    ],
    ui: {
        icons: ['simple-icons']
    },
    colorMode: {
        preference: 'system'
    },
    content: {
        highlight: {
            theme: {
                default: 'material-palenight',
                dark: 'github-dark',
            }
        },
    },
})
