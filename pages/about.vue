<template>
    <AContainer>
        <ASection class="about-block-section">
            <span> there is not much to say about me </span>
        </ASection>
        <ASection class="about-block-section">
            <AContainer class="about-content-container">
                <ContentDoc v-slot="{ doc }">
                    <ContentRenderer :value="doc" />
                </ContentDoc>
                <template #not-found>
                    <h1>Document not found</h1>
                </template>
                <template #empty>
                    <h1>Document is empty</h1>
                </template>
            </AContainer>
        </ASection>
        <ASection class="about-block-section">
            <ul class="flex">
                <li>
                    <NuxtLink to="/writes">
                        <UIcon name="i-heroicons-pencil-square" />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/gallery">
                        <UIcon name="i-heroicons-archive-box" />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/libre">
                        <UIcon name="i-heroicons-code-bracket" />
                    </NuxtLink>
                </li>
            </ul>
        </ASection>
    </AContainer>
</template>
<style scoped>
.about-block-section {
    @apply flex justify-center;
}
</style>