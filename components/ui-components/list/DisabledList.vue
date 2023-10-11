<script setup lang="ts">


const props = defineProps(['icon']);
const component = props.icon;
// List 1,3 Data
const list1 = ref([
    {
        name: 'Sample Page',
        icon: 'AppsIcon',
        id: 1,
    },
    {
        name: 'Elements',
        icon: 'CircleDotIcon',
        id: 2,
    },
    {
        name: 'Page Layouts',
        icon: 'FolderIcon',
        id: 3,
    },

]);

</script>
<template>
    <v-list disabled>
        <v-card variant="outlined" class="py-2">
            <v-list-item class="mb-2" v-for="(list, i) in list1" :value="list" rounded="md" :key="i" active-color="primary">
                <template v-slot:prepend>
                    <v-avatar size="20" color="info">

                    </v-avatar>
                </template>
                <v-list-item-title v-text="list.name"></v-list-item-title>
            </v-list-item>
        </v-card>
    </v-list>
</template>
