<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useAppStore } from '@/stores/app';
const appStore = useAppStore();
const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
  },
];

const a = ref("sssss");
</script>

<template>
  <v-card class="pa-5">
    <v-btn color="success" class="mr-2">success</v-btn>
    <v-btn color="error" class="mr-2">error</v-btn>
    <v-btn color="warning" class="mr-2">warning</v-btn>
    <v-btn color="info" class="mr-2">info</v-btn>
    <v-btn color="primary" class="mr-2">primary</v-btn>
    <v-btn color="secondary" class="mr-2">secondary</v-btn>
    <v-btn color="accent" class="mr-2">accent</v-btn>
  </v-card>
  <div>
    <v-card height="200" class="pa-5 mt-5">
      {{ appStore.theme }}
      <v-btn color="primary" @click="appStore.toggleTheme">toggleTheme</v-btn>
    </v-card>

    <v-card class="mt-5">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

  </div>
</template>

<style scoped lang="scss"></style>
