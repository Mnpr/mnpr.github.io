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
    <AContainer class="flex justify-center">
        <footer>

            <hr />
            <span>
                🤍💙
                <ClientOnly>
                    <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" variant="ghost"
                        aria-label="Theme" @click="isDark = !isDark" />
                    <template #fallback>
                        <span class="w-8 h-8" />
                    </template>
                </ClientOnly>
                💜🖤
            </span>
        </footer>
    </AContainer>
</template>