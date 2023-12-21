<script setup lang="ts"></script>
<template>
  <div class="d-flex flex-wrap align-center gap-3">
    <v-chip color="primary">
      <v-avatar start size="25">
        <v-icon color="primary">mdi-check</v-icon>
      </v-avatar>
      Primary Filled
    </v-chip>
    <v-chip color="primary">
      <v-avatar start size="25">
        <v-icon color="primary">mdi-check</v-icon>
      </v-avatar>
      Primary Deletable
    </v-chip>

    <v-chip color="success">
      <v-avatar start size="25">
        <v-icon color="success">mdi-check</v-icon>
      </v-avatar>
      Default Filled
    </v-chip>
    <v-chip color="success">
      <v-avatar start size="25">
        <v-icon color="success">mdi-check</v-icon>
      </v-avatar>
      Default Deletable
    </v-chip>

    <v-chip color="error">
      <v-avatar start size="25">
        <v-icon color="error">mdi-check</v-icon>
      </v-avatar>
      Default Filled
    </v-chip>
    <v-chip color="error">
      <v-avatar start size="25">
        <v-icon color="error">mdi-check</v-icon>
      </v-avatar>
      Default Deletable
    </v-chip>
  </div>
</template>
