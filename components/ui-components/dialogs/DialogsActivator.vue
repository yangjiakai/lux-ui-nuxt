<script setup lang="ts">


const dialog = ref(false);
</script>

<template>
  <div class="text-center mt-4 mt-sm-0">
    <v-btn color="primary" class="w-100 px-4 ">
      Open Simple Dialog
      <v-dialog v-model="dialog" activator="parent" max-width="800">
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="dialog = false" variant="tonal" class="px-4 ">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
