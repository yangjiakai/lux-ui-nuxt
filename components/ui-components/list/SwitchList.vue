<script setup lang="ts">
// List 4 data
const swt1 = ref(true);
const swt2 = ref(false);
</script>
<template>
    <v-list>
        <v-card variant="outlined" class="py-2">
            <v-list-item value="wifi" class="mb-2  " active-color="primary">
                <div class="d-flex align-center">
                    <v-icon class="mr-2">mdi-wifi</v-icon>
                    <div class="ml-3">Wi-Fi</div>
                    <div class="ml-auto"><v-switch v-model="swt1" inset color="primary" hide-details></v-switch></div>
                </div>

            </v-list-item>
            <v-list-item value="bluetooth" class="mb-2  " active-color="primary">
                <div class="d-flex align-center">
                    <v-icon class="mr-2">mdi-wifi</v-icon>
                    <div class="ml-3">Bluetooth</div>
                    <div class="ml-auto"><v-switch v-model="swt2" inset color="primary" hide-details></v-switch></div>
                </div>

            </v-list-item>
        </v-card>
    </v-list>
</template>
