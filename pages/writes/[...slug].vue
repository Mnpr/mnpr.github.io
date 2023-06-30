<template>
    <AContainer>
        <AnArticle>
            <ACard>
                <AContainer>
                    <ContentDoc v-slot="{ doc }">
                        <ContentRenderer class="text-xl" :value="doc" />
                    </ContentDoc>
                    <template #not-found>
                        <h1>Document not found</h1>
                    </template>
                </AContainer>
            </ACard>
        </AnArticle>
        <hr />
        <ASection class="flex justify-center">
            foot nav >> next, prev here.
        </ASection>
    </AContainer>
</template>
