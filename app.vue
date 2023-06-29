<script setup>
const appConfig = useAppConfig()
</script>

<template>
    <UCard>
        <AContainer>
            <TheHeader />
            <ASection class="main-page-container">
                <NuxtPage />
            </ASection>
            <TheFooter />
        </AContainer>
    </UCard>
</template>

<style scoped>
.main-page-container {
    @apply flex justify-center;
}
</style>