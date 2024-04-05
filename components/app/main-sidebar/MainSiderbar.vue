<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import GithubCard from "@/components/app/main-sidebar/GithubCard.vue";
import MainMenu from "@/components/app/main-sidebar/MainMenu.vue";
import configs from "@/configs";

import { useAppStore } from "@/stores/app";
import { Icon } from "@iconify/vue";
const appStore = useAppStore();
const navigation = ref(configs.mainMenu);
</script>

<template>
  <v-navigation-drawer
    v-model="appStore.mainSidebar"
    elevation="10"
    location="left"
  >
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->

    <!-- <template v-slot:prepend>
      <v-card height="100" class="d-flex align-center justify-center">
        <img width="160" src="@/assets/images/logo.png" alt="" />
      </v-card>
    </template> -->
    <template v-slot:prepend>
      <RouterLink to="/">
        <v-card height="100" class="logo-card">
          <h1 class="logo-text h-full">
            <Icon class="mr-2" width="40" icon="solar:plain-bold-duotone" />
            <span>Lux-UI</span>
          </h1>
        </v-card>
      </RouterLink>
    </template>

    <!-- ---------------------------------------------- -->
    <!---Menu Area -->
    <!-- ---------------------------------------------- -->
    <main-menu :menu="navigation.menu"></main-menu>

    <!-- ---------------------------------------------- -->
    <!---Bottom Area -->
    <!-- ---------------------------------------------- -->
    <template v-slot:append>
      <GithubCard />
    </template>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.logo-text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  color: rgba(var(--v-theme-primary));
}
</style>
