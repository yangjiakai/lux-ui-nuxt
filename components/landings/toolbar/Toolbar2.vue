<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <v-toolbar color="primary">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title></v-toolbar-title>

    <v-btn class="text-none" stacked>
      <v-badge dot color="success">
        <v-icon>mdi-home-outline</v-icon>
      </v-badge>
    </v-btn>

    <v-btn class="text-none" stacked>
      <v-icon>mdi-account-multiple-outline</v-icon>
    </v-btn>

    <v-btn class="text-none" stacked>
      <v-badge content="9+" color="error">
        <v-icon>mdi-store-outline</v-icon>
      </v-badge>
    </v-btn>

    <v-btn class="text-none" stacked>
      <v-badge content="2" color="error">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>

    <v-btn class="text-none" stacked>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<style scoped lang="scss"></style>
