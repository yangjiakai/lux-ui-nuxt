<script setup lang="ts">

const tab = ref(null);
</script>

<template>
    <v-card elevation="0">
        <v-tabs v-model="tab" bg-color="primary" centered stacked>
            <v-tab value="1">
                <v-icon class="v-icon--start" width="20">mdi-phone</v-icon>
                Recents
            </v-tab>
            <v-tab value="2">
                <v-icon class="v-icon--start" width="20">mdi-heart</v-icon>
                Favorites
            </v-tab>
            <v-tab value="3">
                <v-icon class="v-icon--start" width="20">mdi-home</v-icon>
                Nearby
            </v-tab>
        </v-tabs>
        <v-card-text class="bg-grey100 rounded-md mt-4">
            <v-window v-model="tab">
                <v-window-item value="1">
                    Item One
                </v-window-item>
                <v-window-item value="2">
                    Item two
                </v-window-item>
                <v-window-item value="3">
                    Item three
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>
