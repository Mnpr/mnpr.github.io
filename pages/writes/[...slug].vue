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
    </AContainer>
</template>
