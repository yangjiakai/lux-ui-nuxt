<script setup lang="ts">
import BarChartLight from "~/components/charts/base/BarChartLight.vue";
import LineChartLight from "~/components/charts/base/LineChartLight.vue";
import RadialBarChart1Light from "~/components/charts/base/RadialBarChart1Light.vue";
import RadialBarChart2Light from "~/components/charts/base/RadialBarChart2Light.vue";
import RadialBarChart3Light from "~/components/charts/base/RadialBarChart3Light.vue";
import UiCard from "~/components/common/UiCard.vue";
</script>

<template>
  <v-card class="pa-5 mt-10">
    <v-row>
      <v-col cols="12" lg="8">
        <UiCard title="Revenue">
          <LineChartLight />
        </UiCard>
      </v-col>

      <v-col cols="12" lg="4">
        <UiCard title="Sales">
          <BarChartLight />
        </UiCard>
      </v-col>
      <v-col cols="12" lg="4">
        <UiCard title="Successful transaction">
          <RadialBarChart1Light />
        </UiCard>
      </v-col>

      <v-col cols="12" lg="4">
        <UiCard title="Returning customer rate">
          <RadialBarChart2Light />
        </UiCard>
      </v-col>
      <v-col cols="12" lg="4">
        <UiCard title="Sales Target Completed">
          <RadialBarChart3Light />
        </UiCard>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss"></style>
