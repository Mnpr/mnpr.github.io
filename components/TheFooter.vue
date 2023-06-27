<script setup>
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<template>
    <footer>
        <ASection class="flex justify-center">
            <span>
                🤍💚
                <ClientOnly>
                    <UButton :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" variant="ghost" aria-label="Theme"
                        @click="isDark = !isDark" />

                    <template #fallback>
                        <span class="w-8 h-8" />
                    </template>
                </ClientOnly>
                💙🖤
            </span>
        </ASection>
    </footer>
</template>