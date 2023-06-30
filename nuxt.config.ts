// https://content.nuxtjs.org/api/configuration
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxthq/ui',
        '@nuxt/content',
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
