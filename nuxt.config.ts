// https://content.nuxtjs.org/api/configuration
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxthq/ui',
        '@nuxt/content',
    ],
    colorMode: {
        preference: 'light'
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
