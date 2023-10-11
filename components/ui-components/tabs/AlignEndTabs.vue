<script setup lang="ts">
const tab = ref(null);
</script>
<template>
  <v-card elevation="0">
    <v-tabs v-model="tab" color="primary" align-tabs="end">
      <v-tab value="1">Landscape</v-tab>
      <v-tab value="2">Products</v-tab>
      <v-tab value="3">Abstract</v-tab>
    </v-tabs>

    <v-card-text class="rounded-md pa-0 mt-6">
      <v-window v-model="tab">
        <v-window-item value="1">
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" md="4" sm="6">
              <v-img :src="`https://picsum.photos/500/300?image=${i * i * 5 + 10}`" alt="tab" cover class="w-100"
                height="250"></v-img>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="2">
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" md="4" sm="6">
              <v-img :src="`https://picsum.photos/500/300?image=${i * i * 5 + 10}`" alt="tab" cover class="w-100"
                height="250"></v-img>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="3">
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" md="4" sm="6">
              <v-img :src="`https://picsum.photos/500/300?image=${i * i * 5 + 10}`" alt="tab" cover class="w-100"
                height="250"></v-img>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>