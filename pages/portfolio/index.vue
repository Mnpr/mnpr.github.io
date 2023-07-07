<template>
    <AContainer>
        <ASection class="text-5xl portfolio-section">
            <h2><u>
                    <UIcon name="i-heroicons-briefcase" />
                </u></h2>
        </ASection>
        <ASection class="text-2xl portfolio-section">
            <span>MIE Student@ FH Kiel : Instruction/Test/Data Driven DevOps</span>
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
        <Section class="portfolio-section">
            <span class="text-3xl">
                <NuxtLink to="https://github.com/mnpr" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-github" />
                </NuxtLink>
                <!-- <NuxtLink to="https://www.linkedin.com/in/mnpr" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-linkedin" />
                </NuxtLink>
                <NuxtLink to="https://twitter.com/sud3sh_" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-twitter" />
                </NuxtLink> -->
            </span>
        </Section>
        <hr />
        <ASection class="portfolio-section">
            <p class="text-xs"><i>
                    <b>Causes:</b> Arts and Culture • Environment • Health • Libéré src & Decentralized
                    systems.</i>
            </p>
        </ASection>
    </AContainer>
</template>

<style scoped>
.portfolio-section {
    @apply flex justify-center;
}

.out-link {
    @apply text-2xl mr-1;
}
</style>