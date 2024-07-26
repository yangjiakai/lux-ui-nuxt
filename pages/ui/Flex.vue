<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import UiChildCard from "@/components/common/UiCard.vue";
import Gap from "@/components/ui-components/flex/Gap.vue";
</script>

<template>
  <div class="">
    <v-row>
      <!-- Gap -->
      <v-col cols="12">
        <UiChildCard title="Gap">
          <Gap />
        </UiChildCard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
