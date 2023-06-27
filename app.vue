<script setup>
const appConfig = useAppConfig()
useHead({
    title: "sud3sh_oi",
    meta: [
        { name: 'description', content: 'a social IO interface' }
    ],
})
</script>

<template>
    <AContainer class="main-tree-container">
        <TheHeader />
        <ASection class="main-page-section">
            <NuxtPage />
        </ASection>
        <LazyTheFooter />
    </AContainer>
</template>

<style scoped>

.main-page-section {
    @apply flex justify-center;
}
</style>