import colors from '~/data/colors';
<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const series = ref([
  { name: "Ample", data: [100, 390, 210, 350, 290, 180, 250] },
  { name: "Pixel", data: [100, 250, 125, 215, 150, 310, 170] },
]);

// 生成一个长度为 23 的随机整数数组
function generateRandomData() {
  return Array.from({ length: 23 }, () => Math.floor(Math.random() * 500));
}

const chartOptions = computed(() => {
  return {
    series: series.value,
    grid: {
      show: false,
      borderColor: "transparent",
      padding: { left: 30, right: 0, bottom: 0 },
    },
    plotOptions: {},
    colors: ["#FE69A4", "#3CAFE9"],
    fill: {
      // type: "gradient",
      // gradient: {
      //   shade: "dark",
      //   gradientToColors: ["#0b70fb"],
      //   shadeIntensity: 1,
      //   type: "horizontal",
      //   opacityFrom: 1,
      //   opacityTo: 0.9,
      //   stops: [0, 100, 100, 100],
      // },
    },
    chart: {
      type: "line",
      height: 100,
      offsetX: -15,
      toolbar: { show: false },
      foreColor: "#adb0bb",
      fontFamily: `inherit`,
      dropShadow: {
        enabled: true,
        color: "rgba(0,0,0,0.1)",
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
      axisBorder: {
        show: false, // 隐藏 x 轴线
      },
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
    stroke: { curve: "smooth", width: "4" },
    tooltip: {
      theme: "dark",
    },
  };
});
</script>

<template>
  <div class="">
    <apexchart
      type="line"
      height="400px"
      :options="chartOptions"
      :series="chartOptions.series"
    >
    </apexchart>
  </div>
</template>

<style scoped lang="scss"></style>
