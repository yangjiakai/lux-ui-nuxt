<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import BaseLineChart from "~/components/charts/linechart/BaseLineChart.vue";
import UiCard from "~/components/common/UiCard.vue";
</script>

<template>
  <v-row>
    <v-col cols="12">
      <UiCard title="Base Line Chart">
        <BaseLineChart />
      </UiCard>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
