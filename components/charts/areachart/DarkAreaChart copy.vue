<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useChartThemeStore } from "@/stores/chartTheme";
const chartTheme = useChartThemeStore();
const series = ref([
  {
    name: "Open Rate",
    data: [0, 5, 6, 8, 25, 9, 8, 24],
  },
  {
    name: "Recurring Payments",
    data: [0, 3, 1, 2, 8, 1, 5, 1],
  },
]);

const labels = ref(["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep"]);
const chartOptions = computed(() => {
  return {
    chart: {
      fontFamily: `inherit`,
      foreColor: chartTheme.foreColor,
      background: chartTheme.backgroundColor,
      width: "100%",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: chartTheme.colors,
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#0b70fb"],
        type: "horizontal",
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 100, 100, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: "3",
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
      ],
      axisBorder: {
        show: false, // 隐藏 x 轴线
      },
    },
    yaxis: {
      opposite: false,
      labels: {
        show: true,
        fontWeight: "bold",
      },
    },
    legend: {
      show: true,
      position: "top",
      width: "50px",
      offsetY: 20,
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
    theme: {
      mode: "dark",
    },
  };
});
</script>

<template>
  <apexchart
    type="area"
    height="400px"
    width="100%"
    :options="chartOptions"
    :series="series"
  >
  </apexchart>
</template>

<style scoped lang="scss"></style>
