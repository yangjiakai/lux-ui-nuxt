<script setup lang="ts">

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
                    <v-icon>mdi-folder</v-icon>
                </template>
                <v-list-item-title v-text="list.name"></v-list-item-title>
            </v-list-item>
        </v-card>
    </v-list>
</template>
