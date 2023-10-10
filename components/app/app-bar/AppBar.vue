<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
import UserMenu from './UserMenu.vue';
import { useAppStore } from '@/stores/app';
const appStore = useAppStore();
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="appStore.toggleSidebar"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-badge dot color="success">
        <v-icon>mdi-account-multiple-outline</v-icon>
      </v-badge>
    </v-btn>

    <v-btn icon>
      <v-badge color="error" content="7">
        <v-icon>mdi-calendar-check</v-icon>
      </v-badge>
    </v-btn>
    <v-divider vertical thickness="2" inset class="ml-5 mr-1"></v-divider>

    <LanguageSwitcher />

    <UserMenu />

  </v-app-bar>
</template>

<style scoped lang="scss"></style>
