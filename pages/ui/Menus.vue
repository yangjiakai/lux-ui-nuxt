<script setup lang="ts">



import UiCard from '@/components/common/UiCard.vue';

import MenusAnchor from "@/components/ui-components/menus/MenusAnchor.vue";
import MenusHover from "@/components/ui-components/menus/MenusHover.vue";
import MenusActivatorTooltip from "@/components/ui-components/menus/MenusActivatorTooltip.vue";
import MenusPopover from "@/components/ui-components/menus/MenusPopover.vue";
</script>

<template>
  <v-row>
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <UiCard title="Anchor">

          <MenusAnchor />
        </UiCard>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <UiCard title="Hover">
          <MenusHover />
        </UiCard>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <UiCard title="Activator and tooltip">
          <MenusActivatorTooltip />
        </UiCard>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <UiCard title="Popover">
          <MenusPopover />
        </UiCard>
      </v-col>
    </v-row>

  </v-row>
</template>
