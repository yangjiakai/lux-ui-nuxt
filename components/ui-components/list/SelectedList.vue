<script setup lang="ts">

const props = defineProps(['icon']);
const component = props.icon;
// List 1,3 Data
const list1 = ref([
    {
        name: 'Sample Page',

        id: 1,
        link: '/'
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
        <v-list-item class="mb-1" v-for="(list, i) in list1" rounded="md" :value="list" :to="list.link" :key="i"
            active-color="primary">
            <template v-slot:prepend>
                <v-icon class="mr-2">mdi-view-dashboard-edit</v-icon>
            </template>
            <v-list-item-title v-text="list.name"></v-list-item-title>
        </v-list-item>
    </v-list>
</template>
