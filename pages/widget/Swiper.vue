<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import UiCard from "~/components/common/UiCard.vue";
import Swiper1 from "~/components/widgets/swiper/Swiper1.vue";
import Swiper2 from "~/components/widgets/swiper/Swiper2.vue";
</script>

<template>
  <div class="h-full">
    <v-row>
      <v-col cols="12">
        <UiCard title="Effect cards">
          <Swiper1 />
        </UiCard>
      </v-col>

      <!-- <v-col cols="12">
        <UiCard title="Effect cards">
          <Swiper2 />
        </UiCard>
      </v-col> -->
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
