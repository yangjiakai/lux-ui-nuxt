<script setup lang="ts">

const dialog = ref(false);
</script>

<template>
  <div class="text-center">
    <v-btn color="secondary" class="w-100 px-4 " @click="dialog = true"> Open Dialog </v-btn>
    <v-dialog v-model="dialog" max-width="800">
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" class="px-4  mx-auto" @click="dialog = false" variant="tonal">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
