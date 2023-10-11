<script setup lang="ts">
const tab6 = ref(null);
</script>
<template>
    <v-tabs v-model="tab6">
        <v-tab value="111111" color="secondary">
            <PhoneIcon stroke-width="1.5" width="20" class="v-icon--start" /> Item One
        </v-tab>
        <v-tab value="222222" color="warning">
            <HeartIcon stroke-width="1.5" width="20" class="v-icon--start" /> Item Two
        </v-tab>
        <v-tab value="444444" color="primary">
            <UserIcon stroke-width="1.5" width="20" class="v-icon--start" /> Item Three
        </v-tab>
    </v-tabs>
    <v-card-text class="bg-grey100 mt-4 rounded-md">
        <v-window v-model="tab6">
            <v-window-item value="111111">
                item one
            </v-window-item>
            <v-window-item value="222222">
                item two
            </v-window-item>
            <v-window-item value="444444">
                item three
            </v-window-item>
        </v-window>
    </v-card-text>
</template>
