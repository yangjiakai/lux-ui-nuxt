<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { RouterView } from "vue-router";

</script>

<style scoped lang="scss"></style>

<template>
  <v-app>
    <v-navigation-drawer elevation="10" location="left" width="320">
    </v-navigation-drawer>

    <v-main>
      <div class="pa-5">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>
