<script setup lang="ts">

const dialog = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="text-center">
    <v-dialog v-model="dialog" persistent max-width="800">
      <template v-slot:activator="{ props }">
        <v-btn color="warning" class="w-100 px-4 " v-bind="props"> Open Form Dialog </v-btn>
      </template>
      <v-card style="height: 400px" class="overflow-auto">
        <v-container>
          <v-card-title class="pa-5">
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>

            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint
                  required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete :items="[
                  'Skiing',
                  'Ice hockey',
                  'Soccer',
                  'Basketball',
                  'Hockey',
                  'Reading',
                  'Writing',
                  'Coding',
                  'Basejump',
                ]" label="Interests" multiple density="comfortable" variant="outlined"></v-autocomplete>
              </v-col>
            </v-row>

            <small>*indicates required field</small>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="dialog = false" variant="tonal" class="px-4 ">
              Close
            </v-btn>
            <v-btn color="success" @click="dialog = false" variant="tonal" class="px-4 ">
              Save
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
