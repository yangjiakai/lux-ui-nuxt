<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <div class="h-full">
    <!-- MainSidebar -->
    <v-navigation-drawer theme="dark" rail location="right">
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
