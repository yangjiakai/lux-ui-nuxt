<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">

import GithubCard from '@/components/app/main-sidebar/GithubCard.vue';
import MainMenu from '@/components/app/main-sidebar/MainMenu.vue';
import configs from "@/configs";
import { useAppStore } from '@/stores/app';
const appStore = useAppStore();
const navigation = ref(configs.mainMenu);

</script>

<template>
  <v-navigation-drawer v-model="appStore.mainSidebar" elevation="10" location="left">
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->

    <template v-slot:prepend>
      <v-card style="box-shadow: rgba(0, 0, 0, 0.05) 0px 25px 15px -20px" height="100"
        class="d-flex align-center justify-center">
        <img width="200" src="@/assets/images/logo.svg" alt="" />
      </v-card>

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

<style scoped lang="scss"></style>
