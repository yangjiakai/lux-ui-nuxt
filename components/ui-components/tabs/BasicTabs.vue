<script setup lang="ts">

const tab = ref(null);
</script>
<template>
    <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="one">Item One</v-tab>
        <v-tab value="two">Item Two</v-tab>
        <v-tab value="three">Item Three</v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-card-text class="bg-grey100 mt-4 rounded-md">
        <v-window v-model="tab">
            <v-window-item value="one">
                Item One
            </v-window-item>
            <v-window-item value="two">
                Item Two
            </v-window-item>
            <v-window-item value="three">
                Item Three
            </v-window-item>
        </v-window>
    </v-card-text>
</template>
