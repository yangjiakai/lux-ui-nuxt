<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import ApexGradientChart from "@/components/charts/apexchart/ApexGradientChart.vue";

import StatsCard from "@/components/dashboard/StatsCard.vue";
import VisitsCard from "~/components/dashboard/VisitsCard.vue";
import SalesCard from "~/components/dashboard/SalesCard.vue";
import VisitsLineCard from "~/components/dashboard/VisitsLineCard.vue";
import TableCard from "~/components/dashboard/TableCard.vue";
import ActivityCard from "~/components/dashboard/ActivityCard.vue";
import TicketsCard from "~/components/dashboard/TicketsCard.vue";

useHead({
  title: "Lux-Nuxt3",
  meta: [{ name: "description", content: "Lux-Nuxt3-Vuetify3-Admin" }],
});

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
</script>

<template>
  <div class="pa-5">
    <v-row class="mt-1">
      <v-col cols="12" lg="12">
        <StatsCard />
      </v-col>
      <v-col cols="12" lg="8">
        <VisitsLineCard />
      </v-col>
      <v-col cols="12" lg="4">
        <VisitsCard />
      </v-col>
      <v-col cols="12" lg="6">
        <TicketsCard />
      </v-col>
      <v-col cols="12" lg="6">
        <TableCard />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
