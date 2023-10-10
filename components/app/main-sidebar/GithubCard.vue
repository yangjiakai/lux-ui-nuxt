<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const openGithubSite = () => {
  window.open("https://github.com/yangjiakai", "_blank");
};
</script>

<template>
  <v-card height="225" class="pa-3" variant="text" style="box-shadow: rgba(0, 0, 0, 0.05) 0px -25px 15px -20px">
    <v-card class="d-flex flex-column pa-2" color="primary" height="200">
      <v-card-title>
        <v-btn class="mr-2" size="40" color="white" icon>
          <Icon width="30" icon="line-md:github-loop" />
        </v-btn>
        Yang J.K.
      </v-card-title>
      <v-card-subtitle> </v-card-subtitle>
      <v-card-text>
        <div><b>Github:</b></div>
        <div>github.com/yangjiakai</div>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="openGithubSite" color="white" block prepend-icon="mdi-thumb-up-outline" variant="elevated">
          Star Me
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<style scoped lang="scss"></style>
