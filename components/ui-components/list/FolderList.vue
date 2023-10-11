<script setup lang="ts">
import { Icon } from "@iconify/vue";
const folders = ref([
    {
        subtitle: 'Jan 9, 2022',
        title: 'Photos',
        icon: 'FolderIcon',
    },
    {
        subtitle: 'Jan 17, 2022',
        title: 'Works',
        icon: 'BriefcaseIcon'
    },
    {
        subtitle: 'Jan 18, 2022',
        title: 'Vacation',
        icon: 'BeachIcon'
    }
]);
</script>
<template>
    <v-list lines="two">
        <v-card variant="outlined">
            <v-list-item v-for="folder in folders" :key="folder.title" :subtitle="folder.subtitle">
                <template v-slot:prepend>
                    <Icon width="20" class="mr-3" icon="solar:album-line-duotone" />
                </template>
                <template v-slot:title>
                    <h5 class="text-subtitle-1">{{ folder.title }}</h5>
                </template>
                <template v-slot:subtitle>
                    <span class="text-subtitle-2">{{ folder.subtitle }}</span>
                </template>
            </v-list-item>
        </v-card>
    </v-list>
</template>
