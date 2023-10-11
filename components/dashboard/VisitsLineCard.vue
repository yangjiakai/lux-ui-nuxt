<script setup lang="ts">

import { useTheme } from "vuetify";
const { current } = useTheme();
/*Chart*/
const chartOptions = computed(() => {
  return {
    series: [
      { name: "Nuxt3", data: [100, 390, 210, 350, 290, 180, 250] },
      { name: "Vue3", data: [100, 250, 125, 215, 150, 310, 170] },
    ],
    grid: {
      show: false,
      borderColor: "transparent",
      padding: { left: 30, right: 0, bottom: 0 },
    },
    plotOptions: {},
    colors: [current.value.colors.primary, current.value.colors.secondary,],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#0b70fb"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    chart: {
      type: "line",
      height: 220,
      offsetX: -15,
      toolbar: { show: false },
      foreColor: "#adb0bb",
      fontFamily: `inherit`,
      dropShadow: {
        enabled: true,
        color: "rgba(0,0,0,0.2)",
        top: 12,
        left: 4,
        blur: 3,
        opacity: 0.4,
      },
    },

    legend: { show: false },
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep"],
    },
    yaxis: {
      show: true,
      min: 100,
      max: 400,
      tickAmount: 3,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: { curve: "smooth", width: "5" },
    tooltip: { theme: "dark" },

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
        <span class="flex-fill font-weight-bold">Site Visits<span class="text-body-2 ml-2 text-grey">(Year
            2023)</span></span>
      </h6>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <div class="d-sm-flex align-center">

        <div class="ml-auto">
          <div class="d-flex align-center">
            <div class="d-flex align-center px-2">
              <span class="text-primary">
                <span class="text-overline">
                  <i class="mdi mdi-brightness-1 mx-1"></i>
                </span>
                <span class="text-subtitle-1">Nuxt</span>
              </span>
            </div>
            <div class="d-flex align-center px-2">
              <span class="text-secondary">
                <span class="text-overline">
                  <i class="mdi mdi-brightness-1 mx-1"></i>
                </span>
                <span class="text-subtitle-1">Next </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <v-alert color="primary" class="mt-5">
        <v-row>
          <v-col cols="12" sm="4" lg="4">
            <div class="text-subtitle-1">Total Visits</div>
            <h3 class="text-h6 mt-1">11245</h3>
          </v-col>
          <v-col cols="12" sm="4" lg="4">
            <div class="text-subtitle-1">This Year</div>
            <h3 class="text-h6 mt-1">7589</h3>
          </v-col>
          <v-col cols="12" sm="4" lg="4">
            <div class="text-subtitle-1">This Month</div>
            <h3 class="text-h6 mt-1">1476</h3>
          </v-col>
        </v-row>
      </v-alert>
      <div class="mt-5">
        <apexchart type="line" height="200px" :options="chartOptions" :series="chartOptions.series">
        </apexchart>
      </div>
    </v-card-text>
  </VCard>
</template>
