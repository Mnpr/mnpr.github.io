<script setup>
const links = [{
    label: 'profile',
    avatar: {
        src: 'https://avatars.githubusercontent.com/u/12827390?v=4'
    },
    to: '/portfolio',
},
{
    label: 'writes',
    icon: 'i-heroicons-pencil-square',
    to: '/writes'
},
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
            <span class="text-2xl text-center">Invested in ways of Automaton, turtle embarks forth, turning world conserve
                into space of wonders O:).</span>
        </ASection>
        <hr />
        <ASection class="about-block-section">
            <AContainer class="about-content-container">
                <ContentDoc v-slot="{ doc }">
                    <ContentRenderer class="text-2xl" :value="doc" />
                </ContentDoc>
                <template #not-found>
                    <h1>Document not found</h1>
                </template>
            </AContainer>
        </ASection>
        <hr />
        <ASection>
            <UVerticalNavigation :links="links" />
        </ASection>
        <hr />
        <ASection class="text-xl about-block-section">
            foot note: reach.me
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

.about-content-container {
    @apply text-xl;
}
</style>