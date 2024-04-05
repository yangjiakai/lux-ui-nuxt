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
  <v-card height="225" class="pa-3" variant="text">
    <v-card
      class="d-flex flex-column pa-2 gradient-card"
      color="primary"
      height="200"
    >
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
        <v-btn
          @click="openGithubSite"
          color="white"
          block
          prepend-icon="mdi-thumb-up-outline"
          variant="elevated"
        >
          Star Me
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<style scoped lang="scss">
.gradient-card {
  background: linear-gradient(
    270deg,
    rgba(var(--v-theme-primary), 0.7) 0,
    rgb(var(--v-theme-primary)) 100%
  );
  box-shadow: 0 2px 6px rgba(var(--v-theme-primary), 0.3);
}
</style>
