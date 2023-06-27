<template>
    <AContainer>
        <ASection class="text-5xl about-block-section">
            <h2><u>About</u></h2>
        </ASection>
        <ASection class="about-block-section">
            <ul class="about-links">
                <li class="about-link">
                    <NuxtLink to="/portfolio">
                        <UIcon name="i-heroicons-briefcase" />
                    </NuxtLink>
                </li>
                <li class="about-link">
                    <NuxtLink to="/writes">
                        <UIcon name="i-heroicons-pencil-square" />
                    </NuxtLink>
                </li>
                <li class="about-link">
                    <NuxtLink to="/gallery">
                        <UIcon name="i-heroicons-square-3-stack-3d" />
                    </NuxtLink>
                </li>
                <li class="about-link">
                    <NuxtLink to="/libere">
                        <UIcon name="i-heroicons-sparkles" />
                    </NuxtLink>
                </li>
            </ul>
        </ASection>
        <ASection class="text-xl about-block-section">
            Invested in ways of Automaton, turtle push forth, turning conserve into a place of wonder O :).
        </ASection>
        <hr />
        <ASection class="about-block-section">
            <AContainer>
                <ContentDoc v-slot="{ doc }">
                    <ContentRenderer class="text-xl" :value="doc" />
                </ContentDoc>
                <template #not-found>
                    <h1>Document not found</h1>
                </template>
            </AContainer>
        </ASection>
        <hr />
        <ASection class="text-xl about-block-section">
            foot note: reach.me
        </ASection>
    </AContainer>
</template>
<style scoped>
.about-block-section {
    @apply flex justify-center;
}

.about-links {
    @apply flex;
}

.about-link {
    @apply text-4xl;
}
</style>