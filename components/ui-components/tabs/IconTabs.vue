<script setup lang="ts">
const tab3 = ref(null);
</script>
<template>
    <v-tabs v-model="tab3" color="primary">
        <v-tab value="111">

            <v-icon width="22">mdi-phone</v-icon>
        </v-tab>
        <v-tab value="222">

            <v-icon width="22">mdi-heart</v-icon>
        </v-tab>
        <v-tab value="444">

            <v-icon width="22">mdi-home</v-icon>
        </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-card-text class="bg-grey100 mt-4 rounded-md">
        <v-window v-model="tab3">
            <v-window-item value="111">
                Item One
            </v-window-item>
            <v-window-item value="222">
                Item two
            </v-window-item>
            <v-window-item value="444">
                Item three
            </v-window-item>
        </v-window>
    </v-card-text>
</template>
