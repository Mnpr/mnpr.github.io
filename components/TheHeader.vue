<template>
    <header>
        <ASection>
            <nav>
                <ul class="nav-links">
                    <li class="nav-link">
                        <NuxtLink to="/">
                            <UIcon name="i-heroicons-rectangle-group" />
                        </NuxtLink>
                    </li>
                    <li class="nav-link">
                        <NuxtLink to="/about">
                            <UIcon name="i-heroicons-user-circle" />
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </ASection>
        <hr />
    </header>
</template>
<style scoped>
.nav-links {
    @apply flex justify-between mr-auto;
}

.nav-link {
    @apply flex text-5xl;
}
</style>
