<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import BasicColumnChart from "~/components/charts/columnchart/BasicColumnChart.vue";
import BasicColumnChartDark from "~/components/charts/columnchart/BasicColumnChartDark.vue";
import UiCard from "~/components/common/UiCard.vue";
import UiCardDark from "~/components/common/UiCardDark.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" lg="6">
      <UiCard title="Basic Column Chart">
        <BasicColumnChart />
      </UiCard>
    </v-col>

    <v-col cols="12" lg="6">
      <UiCardDark title="Basic Column Chart Dark">
        <BasicColumnChartDark />
      </UiCardDark>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
