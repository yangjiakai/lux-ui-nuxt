<script setup lang="ts">
const tab4 = ref(null);
</script>
<template>
    <v-tabs v-model="tab4" color="primary">
        <v-tab value="1111">

            <v-icon class="v-icon--start" width="20">mdi-phone</v-icon>
            Item One
        </v-tab>
        <v-tab value="2222" disabled>
            Item Two
        </v-tab>
        <v-tab value="4444">
            Item Three
        </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-card-text class="bg-grey100 mt-4 rounded-md">
        <v-window v-model="tab4">
            <v-window-item value="1111">
                item one
            </v-window-item>
            <v-window-item value="2222">
                item two
            </v-window-item>
            <v-window-item value="4444">
                item three
            </v-window-item>
        </v-window>
    </v-card-text>
</template>
