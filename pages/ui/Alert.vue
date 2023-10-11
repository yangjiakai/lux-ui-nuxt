<script setup lang="ts">


import UiCard from '@/components/common/UiCard.vue';
import Basic from '@/components/ui-components/alert/Basic.vue';
import Filled from '@/components/ui-components/alert/Filled.vue';
import Description from '@/components/ui-components/alert/Description.vue';
import Action from '@/components/ui-components/alert/Action.vue';
import Icons from '@/components/ui-components/alert/Icons.vue';
import Outlined from '@/components/ui-components/alert/Outlined.vue';
import Closable from '@/components/ui-components/alert/Closable.vue';

</script>

<template>
  <v-row>
    <v-col cols="12">

      <v-row>
        <!-- Basic -->
        <v-col cols="12">
          <UiCard title="Basic">
            <Basic />
          </UiCard>
        </v-col>
        <!-- Filled -->
        <v-col cols="12">
          <UiCard title="Filled">
            <Filled />
          </UiCard>
        </v-col>
        <!-- Outlined -->
        <v-col cols="12">
          <UiCard title="Outlined">
            <Outlined />
          </UiCard>
        </v-col>

        <!-- Description -->
        <v-col cols="12">
          <UiCard title="Description">
            <Description />
          </UiCard>
        </v-col>
        <!-- With Action -->
        <v-col cols="12">
          <UiCard title="Action">
            <Action />
          </UiCard>
        </v-col>
        <!-- With Icons -->
        <v-col cols="12">
          <UiCard title="With Icons">
            <Icons />
          </UiCard>
        </v-col>

        <!-- Closable -->
        <v-col cols="12">
          <UiCard title="Closable">
            <Closable />
          </UiCard>
        </v-col>
      </v-row>

    </v-col>
  </v-row>
</template>
