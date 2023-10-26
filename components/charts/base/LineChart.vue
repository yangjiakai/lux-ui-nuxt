import colors from '~/data/colors';
<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const series = ref([
  { name: "Ample", data: [210, 100, 320, 110, 200, 150, 310] },
]);

const chartOptions = computed(() => {
  return {
    series: series.value,
    grid: {
      borderColor: "#2E3144",
      padding: { left: 30, right: 0, bottom: 0 },
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {},
    colors: ["#FAD860"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#F76C15"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    chart: {
      type: "line",
      toolbar: { show: false },
      foreColor: "#adb0bb",
      fontFamily: `inherit`,
      dropShadow: {
        enabled: true,
        color: "rgba(216,180,85,.7)",
        blur: 5,
      },
    },

    legend: { show: false },
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep"],
      axisBorder: {
        show: false, // 隐藏 x 轴线
      },
      axisTicks: {
        show: true,
        borderType: "dotted",
        color: "#ccc",
        height: 3,
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 400,
      tickAmount: 3,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: { curve: "smooth", width: "6" },
    tooltip: {
      theme: "dark",
    },
  };
});
</script>

<template>
  <apexchart
    type="line"
    height="260px"
    :options="chartOptions"
    :series="chartOptions.series"
  >
  </apexchart>
</template>

<style scoped lang="scss"></style>
