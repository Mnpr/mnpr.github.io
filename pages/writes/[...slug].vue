<template>
    <AContainer>
        <ASection>
            <ContentDoc v-slot="{ doc }">
                <ContentRenderer :value="doc" />
            </ContentDoc>
            <template #not-found slot>
                <h1>Document not found</h1>
            </template>
        </ASection>
    </AContainer>
</template>