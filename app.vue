<script setup>
const appConfig = useAppConfig()
</script>

<template>
    <AContainer>
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