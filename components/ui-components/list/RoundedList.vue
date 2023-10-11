<script setup lang="ts">
import { Icon } from '@iconify/vue';
const props = defineProps(['icon']);
const component = props.icon;
// List 1,3 Data
const list1 = ref([
    {
        name: 'Sample Page',

        id: 1,
        link: ''
    },
    {
        name: 'Elements',

        id: 2,
        link: ''
    },
    {
        name: 'Page Layouts',

        id: 3,
        link: ''
    }
]);
</script>
<template>
    <v-list>
        <v-list-item class="mb-1" v-for="(list, i) in list1" :value="list" rounded="xl" :key="i" active-color="primary">
            <template v-slot:prepend>


                <Icon width="20" class="mr-3" icon="solar:folder-with-files-line-duotone" />
            </template>
            <v-list-item-title v-text="list.name"></v-list-item-title>
        </v-list-item>
    </v-list>
</template>
