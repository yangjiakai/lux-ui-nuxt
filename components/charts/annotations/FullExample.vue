<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const series = ref([
  8107.85, 8128, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85,
  8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65,
  8881.1, 9340.85,
]);

const labels = ref([
  "13 Nov 2017",
  "14 Nov 2017",
  "15 Nov 2017",
  "16 Nov 2017",
  "17 Nov 2017",
  "20 Nov 2017",
  "21 Nov 2017",
  "22 Nov 2017",
  "23 Nov 2017",
  "24 Nov 2017",
  "27 Nov 2017",
  "28 Nov 2017",
  "29 Nov 2017",
  "30 Nov 2017",
  "01 Dec 2017",
  "04 Dec 2017",
  "05 Dec 2017",
  "06 Dec 2017",
  "07 Dec 2017",
  "08 Dec 2017",
]);
/*Chart*/
const chartOptions = computed(() => {
  return {
    annotations: {
      yaxis: [
        {
          y: 8200,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "Y Axis Annotation",
          },
        },
      ],
      xaxis: [
        {
          // in a datetime series, the x value should be a timestamp, just like it is generated below
          x: new Date("11/17/2017").getTime(),
          strokeDashArray: 0,
          borderColor: "#775DD0",
          label: {
            borderColor: "#775DD0",
            style: {
              color: "#fff",
              background: "#775DD0",
            },
            text: "X Axis Anno Vertical",
          },
        },
        {
          x: new Date("03 Dec 2017").getTime(),
          borderColor: "#FEB019",
          label: {
            borderColor: "#FEB019",
            style: {
              color: "#fff",
              background: "#FEB019",
            },
            orientation: "horizontal",
            text: "X Axis Anno Horizonal",
          },
        },
      ],
      points: [
        {
          x: new Date("27 Nov 2017").getTime(),
          y: 8500.9,
          marker: {
            size: 6,
            fillColor: "#fff",
            strokeColor: "#2698FF",
            radius: 2,
          },
          label: {
            borderColor: "#FF4560",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#FF4560",
            },

            text: "Point Annotation (XY)",
          },
        },
      ],
    },

    theme: {
      mode: "light",
      palette: "palette1",
      monochrome: {
        enabled: true,
        color: "#255aee",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },

    chart: {
      height: 380,
      type: "line",
      id: "areachart-2",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    series: [
      {
        data: series.value,
      },
    ],
    title: {
      text: "Line with Annotations",
      align: "left",
    },
    labels: labels.value,
    xaxis: {
      type: "datetime",
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
