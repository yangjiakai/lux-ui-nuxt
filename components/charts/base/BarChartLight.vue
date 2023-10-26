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
    name: "Net Profit",
    data: [44, 55, 57, 80, 61, 58, 63],
  },
]);

const labels = ref(["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep"]);
const chartOptions = computed(() => {
  return {
    chart: {
      fontFamily: `inherit`,
      foreColor: "#999EA9",
      background: chartTheme.backgroundColor,
      width: "100%",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: "rgba(216,180,85,.5)",
        blur: 5,
      },
    },
    colors: ["#FFC900"],
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#FAD65E"],
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "13px",
        borderRadius: 4,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: labels.value,
      axisBorder: {
        show: false, // 隐藏 x 轴线
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
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
      theme: "light",
    },
    theme: {
      mode: "light",
    },
    title: {
      text: "$10643",
      style: {
        fontSize: "20px",
        fontWeight: "bold",

        color: "#434B52",
      },
    },
  };
});
</script>

<template>
  <apexchart
    type="bar"
    height="260px"
    width="100%"
    :options="chartOptions"
    :series="series"
  >
  </apexchart>
</template>

<style scoped lang="scss"></style>
