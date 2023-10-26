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
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
]);

const labels = ref([
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
]);
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
        gradientToColors: ["#2295FA", "#FF8484", "#FAD35D"],
        type: "vertical",

        stops: [0, 100],
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10px",
        borderRadius: 4,
        endingShape: "rounded",
        colors: {
          ranges: [
            {
              from: 0,
              to: 0,
              color: "transparent",
            },
          ],
          backgroundBarColors: ["#000"], // 设置背景颜色渐变
          backgroundBarOpacity: 0.1, // 设置背景透明度
          backgroundBarRadius: 5, // 设置背景边角半径
        },
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
    type="bar"
    height="400px"
    width="100%"
    :options="chartOptions"
    :series="series"
  >
  </apexchart>
</template>

<style scoped lang="scss"></style>
