<script setup lang="ts">


const dialog = ref(false);
const notifications = ref(false);
const sound = ref(true);
const widgets = ref(false);
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <template v-slot:activator="{ props }">
        <v-btn color="error" class="w-100 px-4 " dark v-bind="props"> Open Fullscreen Dialog </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary" style="flex: unset">
          <v-btn icon color="inherit" @click="dialog = false" flat>
            <XIcon width="20" />
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark @click="dialog = false" flat> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-item>
          <v-list lines="two" subheader>
            User Controls
            <v-list-item title="Content filtering"
              subtitle="Set the content filtering level to restrict apps that can be downloaded"></v-list-item>
            <v-list-item title="Password"
              subtitle="Require password for purchase or use password to restrict purchase"></v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list lines="two" subheader>
            General
            <v-list-item title="Notifications" subtitle="Notify me about updates to apps or games that I downloaded">
              <template v-slot:prepend>
                <v-checkbox v-model="notifications"></v-checkbox>
              </template>
            </v-list-item>
            <v-list-item title="Sound" subtitle="Auto-update apps at any time. Data charges may apply">
              <template v-slot:prepend>
                <v-checkbox v-model="sound"></v-checkbox>
              </template>
            </v-list-item>
            <v-list-item title="Auto-add widgets" subtitle="Automatically add home screen widgets">
              <template v-slot:prepend>
                <v-checkbox v-model="widgets"></v-checkbox>
              </template>
            </v-list-item>
          </v-list>
        </v-card-item>
      </v-card>
    </v-dialog>
  </div>
</template>
