<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import ApexGradientChart from '@/components/charts/apexchart/ApexGradientChart.vue';

import StatsCard from '@/components/dashboard/StatsCard.vue';
import VisitsCard from '~/components/dashboard/VisitsCard.vue';
import SalesCard from '~/components/dashboard/SalesCard.vue';
import VisitsLineCard from '~/components/dashboard/VisitsLineCard.vue';
import TableCard from '~/components/dashboard/TableCard.vue';

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

const text = ref("sssss");
</script>

<template>
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
    <v-col cols="12" lg="4">
      <SalesCard />
    </v-col>
    <v-col cols="12" lg="8">
      <TableCard />
    </v-col>
  </v-row>


  <div>
    <v-card class="pa-5 mt-5">

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
