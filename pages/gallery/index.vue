<template>
    <AContainer>
        <ASection class="text-5xl gallery-section">
            <h2><u>Gallery</u></h2>
        </ASection>
        <ASection class="text-xl gallery-section">
            ~
        </ASection>
        <hr />
        <ASection class="text-xl gallery-section">
            <AContainer>
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
            </AContainer>
        </ASection>
        <hr />
        <Section class="gallery-section">
            <span class="text-3xl">
                <NuxtLink to="https://unsplash.com/@sud3sh_" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-unsplash" />
                </NuxtLink>
                <!-- <NuxtLink to="https://www.instagram.com/xpectron_/" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-instagram" />
                </NuxtLink> -->
                <NuxtLink to="https://soundcloud.com/xpectron" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-soundcloud" />
                </NuxtLink>
                <!-- <NuxtLink to="https://www.youtube.com/@sud3sh_" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-youtube" />
                </NuxtLink> -->
            </span>
        </Section>
        <hr />
        <ASection class="gallery-section">
            <span class="text-xs"><i>*subject_to_change*</i></span>
        </ASection>
    </AContainer>
</template>

<style scoped>
.gallery-section {
    @apply flex justify-center;
}

.out-link {
    @apply text-2xl m-1;
}
</style>