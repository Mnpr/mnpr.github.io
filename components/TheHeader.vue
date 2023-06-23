<template>
    <div>
        <div>
            <ul>
                <li><Icon name="uil:home"/></li>
                <li><Icon name="jam:write" /></li>
                <li><Icon name="iconamoon:profile-bold"/></li>
                <li>
                    <div>
                        <Icon name="mdi:theme-light-dark"/>
                        <select v-model="$colorMode.preference">
                            <option value="system">System</option>
                            <option value="light">light</option>
                            <option value="dark">dark</option>
                            <option value="sepia">sepia</option>
                        </select>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

