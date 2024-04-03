<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const baseSidebar = ref(true);
const denseSider = ref(false);
const rail = ref(false);
const menus = ref([
  { icon: "mdi-home-city", title: "创意设计", value: "home" },
  { icon: "mdi-account", title: "鞋款配色", value: "account" },
  { icon: "mdi-account-group-outline", title: "配色配料", value: "users" },
]);
</script>

<template>
  <div class="">
    <!-- toolbar -->
    <v-toolbar prominent>
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Base Sidebar -->
    <v-navigation-drawer
      v-model="baseSidebar"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav color="primary">
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Users"
          value="users"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- DenseSidebar -->
    <v-navigation-drawer width="100" v-model="denseSider" permanent>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
      >
      </v-list-item>

      <v-divider></v-divider>

      <v-list lines="three" density="compact" nav color="primary">
        <v-list-item v-for="item in menus" :value="item.value">
          <div class="d-flex flex-column align-center justify-center">
            <v-icon>{{ item.icon }}</v-icon>
            <div class="text-body-2 font-weight-bold">{{ item.title }}</div>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
  <div>
    <v-card class="pa-5 ma-5">
      <v-btn @click="baseSidebar = !baseSidebar" class="mr-3"
        >Toggle Base Sidebar</v-btn
      >
      <v-btn @click="denseSider = !denseSider">Toggle Dense Sidebar</v-btn>
    </v-card>
  </div>
</template>

<style scoped lang="scss"></style>
