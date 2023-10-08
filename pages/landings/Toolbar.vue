<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import Toolbar1 from "@/components/landings/toolbar/Toolbar1.vue";
import Toolbar2 from "@/components/landings/toolbar/Toolbar2.vue";
import Toolbar3 from "@/components/landings/toolbar/Toolbar3.vue";
import Toolbar4 from "@/components/landings/toolbar/Toolbar4.vue";
import Toolbar5 from "@/components/landings/toolbar/Toolbar5.vue";

import UiCard from "@/components/common/UiCard.vue";
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Top Toolbar -->
  <!-- ---------------------------------------------- -->

  <UiCard title="Toolbar1">
    <Toolbar1 />
  </UiCard>

  <UiCard title="Toolbar2">
    <Toolbar2 />
  </UiCard>

  <UiCard title="Toolbar3">
    <Toolbar3 />
  </UiCard>

  <UiCard title="Toolbar4">
    <Toolbar4 />
  </UiCard>
  <UiCard title="Toolbar5">
    <Toolbar5 />
  </UiCard>
</template>

<style lang="scss"></style>
