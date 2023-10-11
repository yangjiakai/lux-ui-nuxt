<script setup lang="ts">


const props = defineProps(['icon']);
// List 2 data
const open = ref(['Users']);
</script>
<template>
    <v-list>
        <v-card variant="outlined" class="py-2">
            <div class="text-subttile-2 pl-4 py-3">Nested List Items</div>
            <v-list-item value="" class="mb-2" active-color="primary">
                <template v-slot:prepend>

                    <v-icon class="mr-2">mdi-send</v-icon>
                </template>
                <v-list-item-title>Sent Mail</v-list-item-title>
            </v-list-item>
            <v-list-item value="" class="mb-2" active-color="primary">
                <template v-slot:prepend>

                    <v-icon class="mr-2">mdi-email</v-icon>
                </template>
                <v-list-item-title>Drafts</v-list-item-title>
            </v-list-item>
            <v-list-group value="Users">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" rounded="md" active-color="primary" title="inbox">
                        <template v-slot:prepend>

                            <v-icon class="mr-2">mdi-inbox</v-icon>
                        </template>
                    </v-list-item>
                </template>
                <v-list-item value="Started" active-color="primary" title="Started" rounded="md">
                    <template v-slot:prepend>
                        <v-icon class="mr-2">mdi-circle</v-icon>
                    </template>
                </v-list-item>
            </v-list-group>
        </v-card>
    </v-list>
</template>
