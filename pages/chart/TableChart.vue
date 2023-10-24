<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const dateRangeToggle = ref(1);
const series = ref([
  {
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
]);

// 生成近一个月的随机步数数据
let stepsData = Array.from({ length: 30 }, () =>
  Math.floor(Math.random() * (20000 - 5000 + 1) + 5000)
);

onMounted(() => {
  series.value[0].data = stepsData;
});

const chartOptions = computed(() => {
  return {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10px",
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
      categories: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      labels: {
        style: {
          colors: "#bdc5cd", // 设置x轴标签的颜色
        },
      },
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
      labels: {
        style: {
          colors: "#bdc5cd", // 设置x轴标签的颜色
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
});

const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
  },
];
</script>

<template>
  <div class="">
    <!-- 数据过虑 -->
    <v-sheet color="transparent">
      <v-row align="start">
        <v-col cols="12" md="4">
          <h2 class="card-title mb-2">My Titile</h2>
          <h5 class="label-text">My Sub Title</h5>
        </v-col>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="6">
              <span class="mr-3 label-text">Sort by Date Range</span>
              <v-btn-toggle v-model="dateRangeToggle" density="compact">
                <v-btn color="primary"> Today</v-btn>
                <v-btn color="primary" class="mx-2">This Week</v-btn>
                <v-btn color="primary">this Month</v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="6">
              <span class="mr-3 label-text">or Select Manually</span>
              <v-btn color="white" class="mr-2">
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-calendar</v-icon>
                </template>
                From</v-btn
              >
              <v-btn color="white">
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-calendar</v-icon>
                </template>
                To</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- 图表 -->
    <v-card class="mt-5 pa-5">
      <apexchart
        type="bar"
        height="600"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </v-card>

    <!-- Table -->
    <v-card class="mt-5 pa-2">
      <v-table fixed-header height="400px">
        <thead>
          <tr class="font-weight-bold">
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr class="label-text" v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.subtitle {
  font-size: 0.8rem;
}

.label-text {
  font-weight: 900;
  color: #bdc5cd;
  font-size: 0.8rem;
}
</style>
