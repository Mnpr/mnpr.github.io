<script setup>
const links = [{
    label: 'profile',
    avatar: {
        src: 'https://avatars.githubusercontent.com/u/12827390'
    },
    to: '/portfolio',
},
// {
//     label: 'writes',
//     icon: 'i-heroicons-pencil-square',
//     to: '/writes'
// },
{
    label: 'gallery',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/gallery'
}]
</script>
<template>
    <AContainer class="about-page-container">
        <ASection class="about-block-section">
            <h2 class="text-5xl"><u>About</u></h2>
        </ASection>
        <ASection class="about-block-section">
            <span class="text-2xl text-center">
                Learning and working with Information Science, distilling simplicity out of evergrowing information and
                persued complexities, turtle and part-time embarks forth towards wonders of tomorrow O:).
            </span>
        </ASection>
        <hr />
        <ASection class="about-block-section">
            <UVerticalNavigation :links="links" />
        </ASection>
        <hr />
        <ASection class="about-block-section">
            <AContainer>
                <ContentDoc v-slot="{ doc }">
                    <ContentRenderer class="text-2xl" :value="doc" />
                </ContentDoc>
                <template #not-found>
                    <h1>Document not found</h1>
                </template>
            </AContainer>
        </ASection>
        <hr />
        <ASection class="about-block-section">
            .
        </ASection>
        <hr />
        <ASection class="about-block-section">
            <span class="text-xs"><i>*edit footnote*</i></span>
        </ASection>
    </AContainer>
</template>
<style scoped>
.about-page-conainer {
    @apply flex;
}

.about-block-section {
    @apply flex justify-center;
}
</style>