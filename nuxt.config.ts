// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon',
    ],
    colorMode: { classSuffix: '' },
    content: {
      // https://content.nuxtjs.org/api/configuration
    }
})
