<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <v-navigation-drawer elevation="10" location="left" width="320">
    <Icon class="text-primary" width="100" icon="solar:emoji-funny-square-bold-duotone" />
    <v-btn color="primary">text</v-btn>
    <v-icon>mdi-home</v-icon>
  </v-navigation-drawer>
</template>

<style scoped lang="scss"></style>
