<script setup lang="ts">

import { useTheme } from "vuetify";
const { current } = useTheme();
/*Chart*/
const chartOptions = computed(() => {
  return {
    series: [25, 35, 15, 35],
    labels: ["Mobile", "tablet", "Other", "Desktop"],
    chart: {
      height: 280,
      type: "donut",
      foreColor: "#adb0bb",
      fontFamily: `inherit`,
    },
    colors: [current.value.colors.primary, current.value.colors.secondary, current.value.colors.info, current.value.colors.success],
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: {
      show: false,
      borderColor: "transparent",
      padding: { top: 0, right: 0 },
    },
    stroke: { colors: ["transparent"] },
    plotOptions: {
      pie: {
        donut: {
          size: "85%",
          background: "transparent",
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: "18px",
              color: undefined,
              offsetY: -10,
            },
            value: { show: false, color: "#98aab4" },
            total: { show: false, label: "Our Visitors", color: "#98aab4" },
          },
        },
      },
    },
    tooltip: { theme: "dark", fillSeriesColor: false },
    responsive: [{ breakpoint: 480, options: { chart: { height: 230 } } }],
  }
});


</script>

<template>
  <!-- ------------------------------------ -->
  <!-- html -->
  <!-- ------------------------------------ -->
  <VCard elevation="10">
    <v-card-title>
      <h6 class="card-title pa-2">
        <span class="flex-fill font-weight-bold">Visits<span class="text-body-2 ml-2 text-grey">(From
            Devices)</span></span>
      </h6>
    </v-card-title>
    <v-divider></v-divider>

    <v-card-text>

      <div class="mt-3 pt-5 position-relative">
        <apexchart type="donut" height="302" :options="chartOptions" :series="chartOptions.series"></apexchart>
      </div>
      <div class="d-flex align-center justify-space-between mt-9">
        <div class="d-flex align-center px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 text-secondary mx-1"></i>
          </span>
          <span class="text-subtitle-1 mr-1">Tablet</span>
        </div>
        <div class="d-flex align-center px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 text-primary mx-1"></i>
          </span>
          <span class="text-subtitle-1 mr-1">Mobile</span>
        </div>
        <div class="d-flex align-center text-success px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1  mx-1"></i>
          </span>
          <span class="text-subtitle-1 mr-1">Desktop
          </span>
        </div>
        <div class="d-flex align-center text-info px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1  mx-1"></i>
          </span>
          <span class="text-subtitle-1 mr-1">Others
          </span>
        </div>
      </div>
    </v-card-text>
  </VCard>
</template>

<style scoped>
.total-sales-icon {
  position: absolute;
  left: 46%;
  top: 45%;
}
</style>
