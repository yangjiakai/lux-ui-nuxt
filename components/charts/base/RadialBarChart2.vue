import colors from '~/data/colors';
<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useChartThemeStore } from "@/stores/chartTheme";
const chartTheme = useChartThemeStore();

const chartOptions = computed(() => {
  return {
    chart: {
      foreColor: "#999EA9",
      background: chartTheme.backgroundColor,
    },

    series: [80],
    colors: ["#F9C052"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#F8862D"],
        stops: [0, 100],
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
        },
        track: {
          background: "#50546D",
          strokeWidth: "95%",
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
    theme: {
      mode: "dark",
    },
  };
});
</script>

<template>
  <apexchart
    type="radialBar"
    height="260px"
    :options="chartOptions"
    :series="chartOptions.series"
  >
  </apexchart>
</template>

<style scoped lang="scss"></style>
