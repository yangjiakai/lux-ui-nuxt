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

import UiParentCard from "@/components/common/UiParentCard.vue";
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Top Toolbar -->
  <!-- ---------------------------------------------- -->

  <UiParentCard title="Toolbar1">
    <Toolbar1 />
  </UiParentCard>

  <UiParentCard title="Toolbar2">
    <Toolbar2 />
  </UiParentCard>

  <UiParentCard title="Toolbar3">
    <Toolbar3 />
  </UiParentCard>

  <UiParentCard title="Toolbar4">
    <Toolbar4 />
  </UiParentCard>
  <UiParentCard title="Toolbar5">
    <Toolbar5 />
  </UiParentCard>
</template>

<style lang="scss"></style>
