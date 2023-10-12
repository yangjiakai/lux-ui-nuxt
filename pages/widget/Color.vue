<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import colors from "@/data/colors";
import CopyLabel from "~/components/common/CopyLabel.vue";
const fullColors = ref(colors)

</script>

<template>
  <div class="">
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="colorTheme in fullColors" :key="colorTheme.key">

        <v-card class="mb-10">
          <v-card :color="colorTheme.class" height="100">
            <h1 class="font-weight-bold pa-5">
              {{ colorTheme.key }}
            </h1>
          </v-card>
          <v-card :color="color.key === 'base' ? colorTheme.class : color.colorClass" height="100"
            class="ma-5 pa-5 text-body-2" v-for="color in colorTheme.colors" :key="color.key">
            <h3>
              <!-- <copy-label :text="color.key === 'base' ? colorTheme.class : color.colorClass"></copy-label> -->
              {{ color.key === 'base' ? colorTheme.class : color.colorClass }}
            </h3>
            <h3 class="mt-2">
              <!-- <copy-label :text="color.color"></copy-label> -->
              {{ color.color }}
            </h3>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
