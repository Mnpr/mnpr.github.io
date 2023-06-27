<template>
    <AContainer>
        <ASection class="text-5xl portfolio-section">
            <h2><u>Portfolio</u></h2>
        </ASection>
        <ASection class="text-xl portfolio-section">
            intro note sec.
        </ASection>
        <hr />
        <ASection class="text-xl portfolio-section">
            <ContentDoc v-slot="{ doc }">
                <template>
                    <h1>{{ doc.title }}</h1>
                    <ContentRenderer :value="doc" />
                </template>
            </ContentDoc>
            <ContentDoc>
                <template #not-found>
                    <h1>Document not found</h1>
                </template>
                <template #empty>
                    <h1>Document is empty</h1>
                </template>
            </ContentDoc>
        </ASection>
        <hr />
        <ASection class="text-xl portfolio-section">
            foot note sec.
        </ASection>
    </AContainer>
</template>

<style scoped>
.portfolio-section {
    @apply flex justify-center;
}
</style>