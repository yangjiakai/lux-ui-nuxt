<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <v-sheet rounded="xl" class="dark-bg my-5 pa-5">
    <v-row>
      <v-col cols="12" xl="6">
        <div class="dark-card"></div>
      </v-col>
      <v-col cols="12" xl="6">
        <div class="dark-card"></div>
      </v-col>
      <v-col cols="12" xl="6">
        <div class="dark-card"></div>
      </v-col>
      <v-col cols="12" xl="6">
        <div class="dark-card"></div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style scoped lang="scss">
.dark-bg {
  background-image: url("https://images.unsplash.com/photo-1690321607902-d97c4b909a23?auto=format&fit=crop&q=80&w=3870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
}

.dark-card {
  height: 450px;
  border-radius: 20px;
  border: #333a76 2px solid;
  background-color: rgba(#545db7, 0.1);
  backdrop-filter: blur(20px);
}
</style>
