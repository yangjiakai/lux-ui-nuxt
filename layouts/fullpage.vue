// =============================== || FullPage Layout ||
=============================== //
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { RouterView } from "vue-router";
</script>
<template>
  <v-app>
    <v-app-bar :elevation="0" class="border-b-sm">
      <template v-slot:prepend>
        <RouterLink class="text-primary" to="/">
          <Icon class="mr-2" width="40" icon="solar:plain-bold-duotone" />
        </RouterLink>
      </template>

      <!-- <v-app-bar-title>Application Bar</v-app-bar-title> -->
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
