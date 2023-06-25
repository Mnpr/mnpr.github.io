// https://content.nuxtjs.org/api/configuration
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxthq/ui',
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
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
        markdown: {
            toc: {
                depth: 5,
                searchDepth: 5
            },
        }
    },
})
