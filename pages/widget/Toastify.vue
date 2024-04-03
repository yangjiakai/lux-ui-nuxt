<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import useToast from "../../composables/useToast";

const showMsg = (type: any) => {
  useToast(type + " " + "messasge !", { type: type });
};

const showColoredMsg = (type: any) => {
  useToast(type + " " + "messasge !", { type: type, theme: "colored" });
};

const showDarkMsg = (type: any) => {
  useToast(type + " " + "messasge !", { type: type, theme: "dark" });
};

const types = ["success", "error", "info", "warning", "default"];
const positions = [
  "top-left",
  "top-right",
  "top-center",
  "bottom-left",
  "bottom-right",
  "bottom-center",
];

const showPositionMsg = (position: any) => {
  useToast("Position " + position + " messasge !", { position: position });
};
</script>

<template>
  <div class="">
    <v-card class="ma-5">
      <v-card-title class="card-title">Light</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="d-flex justify-space-around pa-10">
        <v-btn
          v-for="type in types"
          :key="index"
          :color="type"
          @click="showMsg(type)"
          >{{ type }}</v-btn
        >
      </v-card-text>
    </v-card>
    <v-card class="ma-5">
      <v-card-title class="card-title">Dark</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="d-flex justify-space-around pa-10">
        <v-btn
          v-for="type in types"
          :key="index"
          :color="type"
          @click="showDarkMsg(type)"
          >{{ type }}</v-btn
        >
      </v-card-text>
    </v-card>
    <v-card class="ma-5">
      <v-card-title class="card-title">Colored</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="d-flex justify-space-around pa-10">
        <v-btn
          v-for="type in types"
          :key="index"
          :color="type"
          @click="showColoredMsg(type)"
          >{{ type }}</v-btn
        >
      </v-card-text>
    </v-card>
    <v-card class="ma-5">
      <v-card-title class="card-title">Positions</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="d-flex justify-space-around pa-10">
        <v-btn
          v-for="position in positions"
          :key="index"
          color="primary"
          @click="showPositionMsg(position)"
          >{{ position }}</v-btn
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped lang="scss"></style>
