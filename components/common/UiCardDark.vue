<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <v-card class="text-white dark-bg">
    <div class="wrapper">
      <v-card-title>
        <span class="font-weight-bold"> {{ props.title }}</span>
        <v-spacer></v-spacer>
      </v-card-title>

      <v-divider></v-divider>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
.dark-bg {
  background-image: url("https://images.unsplash.com/photo-1690321607902-d97c4b909a23?auto=format&fit=crop&q=80&w=3870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
}

.wrapper {
  height: 100%;
  background-color: rgba(#151c9c, 0.1);
  backdrop-filter: blur(20px);
}
</style>
