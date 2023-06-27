<template>
    <AContainer>
        <ASection class="text-5xl libere-section">
            <h2><u>Libére</u></h2>
        </ASection>
        <ASection class="text-xl libere-section">
            intro note sec.
        </ASection>
        <hr />
        <ASection class="text-xl libere-section">
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
        <ASection class="text-xl libere-section">
            foot note sec.
        </ASection>
    </AContainer>
</template>

<style scoped>
.libere-section {
    @apply flex justify-center;
}
</style>