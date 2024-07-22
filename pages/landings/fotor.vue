<script setup lang="ts">
definePageMeta({
  layout: "fullpage",
});

const prompt = ref("");
</script>

<template>
  <div class="container h-full">
    <div class="left pa-5 d-flex flex-column">
      <!-- Buttons -->
      <div class="d-flex gap-1 mb-5">
        <v-btn color="primary" class="flex-grow-1"> 文生图 </v-btn>
        <v-btn color="primary" class="flex-grow-1"> 图生图 </v-btn>
      </div>
      <!-- Prompt -->
      <div>
        <v-textarea
          v-model="prompt"
          class="mb-5"
          color="primary"
          variant="outlined"
          label="提示词"
          counter
          hide-details
          clearable
        ></v-textarea>
      </div>

      <!-- Create -->

      <div>
        <v-btn color="primary" block class="mb-5"> 生成 </v-btn>
      </div>

      <!-- Param -->
      <div class="d-flex gap-1 mb-5">
        <v-select
          label="比例"
          density="compact"
          hide-details
          color="primary"
          class="flex-grow-1"
          :items="['1:1', '4:3', '3:4', '16:9', '9:16']"
          variant="outlined"
        ></v-select>
        <v-select
          label="尺寸"
          density="compact"
          hide-details
          color="primary"
          class="flex-grow-1"
          :items="['1', '2', '3', '4']"
          variant="outlined"
        ></v-select>
      </div>
      <!-- Styles -->
      <div class="overflow-auto styles-container">
        <h1 v-for="i in 25">AAA</h1>
      </div>
    </div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: 100%;
}
.left,
.right {
  width: 400px;
}
.center {
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  flex: 1;
}

.gap-1 {
  gap: 1rem;
}

.styles-container {
  height: calc(100vh - 450px);
}
</style>
