<script setup>
const appConfig = useAppConfig()
</script>

<template>
    <div>
        <TheHeader />
            <NuxtPage />
        <LazyTheFooter />
    </div>
</template>