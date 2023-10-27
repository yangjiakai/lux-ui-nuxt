<script setup lang="ts">
import BarChart from "~/components/charts/base/BarChart.vue";
import LineChart from "~/components/charts/base/LineChart.vue";
import RadialBarChart1 from "~/components/charts/base/RadialBarChart1.vue";
import RadialBarChart2 from "~/components/charts/base/RadialBarChart2.vue";
import RadialBarChart3 from "~/components/charts/base/RadialBarChart3.vue";

import { Icon } from "@iconify/vue";
</script>

<template>
  <v-card class="sheet-bg pa-5">
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="card-bg">
          <v-card-title class="text-white font-weight-bold">
            Revenue
            <v-spacer></v-spacer>
            <v-btn variant="text" icon color="#6F7B8B"
              ><Icon width="30" icon="ion:ellipsis-horizontal"
            /></v-btn>
          </v-card-title>
          <v-card-text>
            <LineChart />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="card-bg">
          <v-card-title class="text-white font-weight-bold">
            Sales
            <v-spacer></v-spacer>
            <v-btn variant="text" icon color="#6F7B8B"
              ><Icon width="30" icon="ion:ellipsis-horizontal"
            /></v-btn>
          </v-card-title>
          <v-card-text>
            <BarChart />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="card-bg">
          <v-card-title class="text-white text-center font-weight-bold">
            Successful transaction
            <v-spacer></v-spacer>
            <v-btn variant="text" icon color="#6F7B8B"
              ><Icon width="30" icon="ion:ellipsis-horizontal"
            /></v-btn>
          </v-card-title>
          <v-card-text>
            <RadialBarChart1 />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="card-bg">
          <v-card-title class="text-white font-weight-bold">
            Returning customer rate
            <v-spacer></v-spacer>
            <v-btn variant="text" icon color="#6F7B8B"
              ><Icon width="30" icon="ion:ellipsis-horizontal"
            /></v-btn>
          </v-card-title>
          <v-card-text>
            <RadialBarChart2 />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="card-bg">
          <v-card-title class="text-white font-weight-bold">
            Sales Target Completed
            <v-spacer></v-spacer>
            <v-btn variant="text" icon color="#6F7B8B"
              ><Icon width="30" icon="ion:ellipsis-horizontal"
            /></v-btn>
          </v-card-title>
          <v-card-text>
            <RadialBarChart3 />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">
.sheet-bg {
  background-image: linear-gradient(to right, #282e41, #59627c);
}

.card-bg {
  background-image: linear-gradient(45deg, #0f1325, #242942);
  box-shadow: rgba(0, 0, 0, 0.19) -10px 10px 20px,
    rgba(0, 0, 0, 0.23) -6px 10px 20px;
}
</style>
