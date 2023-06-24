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
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">
                        <UIcon name="i-heroicons-home" />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/writes">
                        <UIcon name="i-heroicons-pencil-square" />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">
                        <UIcon name="i-heroicons-user-circle" />
                    </NuxtLink>
                </li>
                <li>
                    <ClientOnly>
                        <!-- <UButton :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" variant="ghost" aria-label="Theme"
                            @click="isDark = !isDark" /> -->

                        <template #fallback>
                            <div class="w-8 h-8" />
                        </template>
                    </ClientOnly>
                </li>
            </ul>
        </nav>
    </header>
</template>

