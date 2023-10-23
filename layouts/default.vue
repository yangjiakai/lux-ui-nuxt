<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { RouterView } from "vue-router";
import MainSiderbar from "@/components/app/main-sidebar/MainSiderbar.vue";
import AppBar from "@/components/app/app-bar/AppBar.vue";
</script>

<style scoped lang="scss"></style>

<template>
  <v-app>
    <MainSiderbar />
    <AppBar />
    <v-main class="fill-height">
      <div class="fill-height pa-5">
        <transition name="fade">
          <RouterView />
        </transition>
      </div>
    </v-main>
  </v-app>
</template>
