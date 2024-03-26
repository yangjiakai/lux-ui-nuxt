<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <div class="h-full">
    <!-- MainSidebar -->
    <v-navigation-drawer theme="dark" permanent rail>
      <template v-slot:prepend>
        <div class="text-center py-5">
          <v-avatar size="36" color="red">
            <img
              src="https://cdn.dribbble.com/users/1253590/avatars/small/b26bbea3f53c6e8071597cf812f428aa.png?1701057211"
              alt="alt"
            />
          </v-avatar>
        </div>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          value="dashboard"
        ></v-list-item>

        <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            value="dashboard"
          ></v-list-item>

          <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <!-- SubSidebar -->
    <v-navigation-drawer permanent width="320">
      <template v-slot:prepend>
        <div class="d-flex align-center px-3 pt-5 pb-2">
          <v-text-field
            density="compact"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            color="primary"
            hide-details
          ></v-text-field>
          <!-- Add Btn -->
          <v-btn class="ml-2" color="primary" size="small" icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </template>

      <v-list lines="one" active-class="bg-primary">
        <v-list-item v-for="i in 20" :value="i" class="py-3">
          <v-list-item-title class="text-body-2"
            >UI Component</v-list-item-title
          >
          <v-list-item-subtitle>
            Set the content filtering level to restrict appts that can be
            downloaded
          </v-list-item-subtitle>
          <!-- Avatar -->
          <template v-slot:prepend>
            <v-avatar size="40">
              <img
                src="https://cdn.dribbble.com/users/12865939/avatars/small/3acee4ea36ccf06cfe835761c38ba00c.png?1661974671"
                alt="alt"
              />
            </v-avatar>
          </template>
          <template v-slot:append="{ isActive }">
            <div
              class="text-center chat-append"
              :chass="isActive ? 'text-white' : 'text-grey'"
            >
              <div>2024/03/13</div>
              <div>
                <v-icon>mdi-bell</v-icon>
              </div>
            </div>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="h-full main-bg"></div>
  </div>
</template>

<style scoped lang="scss">
.chat-append {
  font-size: 10px;
}

.main-bg {
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(135deg, #313395, #a14be5);
}
</style>
