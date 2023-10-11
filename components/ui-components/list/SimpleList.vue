<script setup lang="ts">
import { Icon } from '@iconify/vue';
const list1 = ref([
    {
        name: 'Sample Page',
        icon: 'AppsIcon',
    },
    {
        name: 'Elements',
        icon: 'CircleDotIcon',
    },
    {
        name: 'Page Layouts',
        icon: 'FolderIcon',
    },
    {
        name: 'Components',
        icon: 'DragDropIcon',
    }
]);

</script>
<template>
    <v-list>
        <v-card variant="outlined" class="py-2">
            <v-list-item class="mb-2" v-for="list in list1" :value="list" rounded="md" :key="list.name"
                active-color="primary">
                <template v-slot:prepend>
                    <Icon width="20" class="mr-3" icon="solar:folder-open-line-duotone" />
                </template>
                <v-list-item-title v-text="list.name"></v-list-item-title>
            </v-list-item>
        </v-card>
    </v-list>
</template>
