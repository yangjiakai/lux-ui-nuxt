<script setup lang="ts"></script>
<template>
  <v-expansion-panels>
    <v-expansion-panel elevation="10">
      <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
        Accordion 1
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </v-expansion-panel-text>
      <v-divider></v-divider>
    </v-expansion-panel>

    <v-expansion-panel elevation="10">
      <v-expansion-panel-title>
        Accordion 2
        <template v-slot:actions="{ expanded }">
          <v-icon
            :color="!expanded ? 'teal' : ''"
            :icon="expanded ? 'mdi-pencil' : 'mdi-check'"
          ></v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </v-expansion-panel-text>
      <v-divider></v-divider>
    </v-expansion-panel>

    <v-expansion-panel elevation="10">
      <v-expansion-panel-title disable-icon-rotate>
        Accordion 3
        <template v-slot:actions>
          <v-icon color="primary" icon="mdi-alert-circle"> </v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </v-expansion-panel-text>
      <v-divider></v-divider>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
