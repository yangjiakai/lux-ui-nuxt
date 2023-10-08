<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { RouterView } from "vue-router";
import MainSiderbar from "@/components/app/main-sidebar/MainSiderbar.vue";

</script>

<style scoped lang="scss"></style>

<template>
  <v-app>
    <MainSiderbar />
    <v-main class="fill-height">
      <div class="fill-height pa-5">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>
