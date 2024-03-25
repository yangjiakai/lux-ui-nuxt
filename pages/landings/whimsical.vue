<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const amenities = ref([]);
const chipList2 = ref([]);
const tags = [
  "Work",
  "Home Improvement",
  "Vacation",
  "Food",
  "Drawers",
  "Shopping",
  "Art",
  "Tech",
  "Creative Writing",
];
</script>

<template>
  <div class="whimsical-bg">
    <div class="content-area">
      <p>2/2</p>
      <p class="font-weight-bold text-h4 my-5">
        What do you want to use Whimsical for?
      </p>
      <p>Designed to follow wherever your thinking takes you.</p>

      <div class="flex-grow-1 mt-10">
        <v-chip-group
          v-model="amenities"
          column
          multiple
          selected-class="bg-white text-primary"
        >
          <v-chip variant="outlined" filter v-for="i in 15">
            Elevator

            <Icon
              class="ml-1"
              width="16"
              icon="solar:chart-2-bold-duotone"
            ></Icon>
          </v-chip>
        </v-chip-group>
      </div>

      <p>
        <v-btn
          density="comfortable"
          variant="text"
          icon="mdi-arrow-left"
        ></v-btn>
        <v-btn class="ml-5" variant="text">Skip and go to workspace</v-btn>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.whimsical-bg {
  height: 100vh;
  background-color: #ccc;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, #313395, #a14be5);
  color: white;
  .content-area {
    height: 650px;
    display: flex;
    flex-direction: column;

    width: 700px;
    margin: 0 auto;
  }
}

.my-chip {
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 5px;
  border-radius: 5px;
}
.hover-chip {
  background-color: #fff;
  color: #6558f5;
}
</style>
