<template>
    <AContainer>
        <ASection class="text-5xl writes-section">
            <h2>
                <UIcon name="i-heroicons-pencil-square" />
            </h2>
        </ASection>
        <ASection class="text-xl writes-section">
            ! self learning tags here...
        </ASection>
        <hr />
        <ASection class="text-xl writes-section">
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
        <ASection class="text-xl writes-section">
            foot note sec.
        </ASection>
        <hr />
        <ASection class="writes-section">
            <span class="text-xs"><i>*subject_to_change*</i></span>
        </ASection>
    </AContainer>
</template>

<style scoped>
.writes-section {
    @apply flex justify-center;
}
</style>