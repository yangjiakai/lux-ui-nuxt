<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import BaseAreaChart from "~/components/charts/areachart/BaseAreaChart.vue";
import BasicAreaChart from "~/components/charts/areachart/BasicAreaChart.vue";
import DarkAreaChart from "~/components/charts/areachart/DarkAreaChart.vue";
import UiCard from "~/components/common/UiCard.vue";
import UiCardDark from "~/components/common/UiCardDark.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" lg="6">
      <UiCard title="Base Area Chart">
        <BaseAreaChart />
      </UiCard>
    </v-col>

    <v-col cols="12" lg="6">
      <UiCard title="Basic Area Chart">
        <BasicAreaChart />
      </UiCard>
    </v-col>

    <v-col cols="12" lg="6">
      <UiCardDark title="Dark Area Chart">
        <DarkAreaChart />
      </UiCardDark>
    </v-col>
    <v-col cols="12" lg="6">
      <UiCardDark title="Dark Area Chart">
        <DarkAreaChart />
      </UiCardDark>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
