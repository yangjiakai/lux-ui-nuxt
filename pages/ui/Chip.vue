<script setup lang="ts">
// common components
import UiChildCard from "@/components/common/UiCard.vue";
import FilledColor from "@/components/ui-components/chip/FilledColor.vue";

import CustomIcon from "@/components/ui-components/chip/CustomIcon.vue";

import Sizes from "@/components/ui-components/chip/Sizes.vue";
import Closable from "@/components/ui-components/chip/Closable.vue";
</script>

<template>
  <v-row>
    <!-- Filled Color -->
    <v-col cols="12">
      <UiChildCard title="Filled">
        <FilledColor />
      </UiChildCard>
    </v-col>

    <!-- Label with Icon -->
    <v-col cols="12" lg="6">
      <UiChildCard title="Custom Icon">
        <CustomIcon />
      </UiChildCard>
    </v-col>

    <!-- Sizes -->
    <v-col cols="12" lg="6">
      <UiChildCard title="Sizes">
        <Sizes />
      </UiChildCard>
    </v-col>
    <!-- Closable -->
    <v-col cols="12">
      <UiChildCard title="Closable">
        <Closable />
      </UiChildCard>
    </v-col>
  </v-row>
</template>
