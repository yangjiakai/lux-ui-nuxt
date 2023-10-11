<script setup lang="ts">

</script>

<template>
  <div class="text-center">
    <v-dialog transition="dialog-bottom-transition" max-width="800">
      <template v-slot:activator="{ props }">
        <v-btn color="success" class="w-100 px-4 " v-bind="props">Open Transition Dialog</v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar color="primary" class="px-4">Opening from the bottom</v-toolbar>
          <v-card-item>
            <div class="text-h2 pa-12">Hello world!</div>
          </v-card-item>
          <v-card-actions class="justify-end">
            <v-btn color="error" variant="tonal" @click="isActive.value = false" class="px-4 ">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>
