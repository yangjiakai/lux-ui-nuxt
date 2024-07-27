<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import UiChildCard from "@/components/common/UiCard.vue";
import AnimateBorders from "@/components/ui-components/animation/AnimateBorders.vue";
</script>

<template>
  <div class="">
    <v-row>
      <!-- Gap -->
      <v-col cols="12">
        <UiChildCard title="Animate Borders">
          <AnimateBorders />
        </UiChildCard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
