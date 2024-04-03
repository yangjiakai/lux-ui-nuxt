<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const router = useRouter();

const handleLogout = () => {
  router.push("auth/login");
};

const navs = [
  {
    title: "Profile",

    link: "/profile",
    icon: "mdi-account-box-outline",
  },
];
</script>

<template>
  <v-menu
    :close-on-content-click="false"
    location="bottom right"
    transition="slide-y-transition"
  >
    <!-- ---------------------------------------------- -->
    <!-- Activator Btn -->
    <!-- ---------------------------------------------- -->
    <template v-slot:activator="{ props }">
      <v-btn class="mx-2" icon v-bind="props">
        <v-badge content="2" color="success" dot bordered>
          <v-avatar color="#eee" size="40">
            <v-img
              src="https://sindresorhus.com/apps/ai-actions/icon.png"
              alt="external-nuxt-js-a-free-and-open-source-web-application-framework-logo-green-tal-revivo"
            ></v-img>
          </v-avatar>
        </v-badge>
      </v-btn>
    </template>
    <v-card max-width="300">
      <v-list lines="three" density="compact">
        <!-- ---------------------------------------------- -->
        <!-- Profile Area -->
        <!-- ---------------------------------------------- -->
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar size="56">
              <v-img
                src="https://sindresorhus.com/apps/ai-actions/icon.png"
                alt="external-nuxt-js-a-free-and-open-source-web-application-framework-logo-green-tal-revivo"
              ></v-img>
            </v-avatar>
          </template>

          <v-list-item-title class="font-weight-bold text-primary">
            YANG J.K.
          </v-list-item-title>
          <v-list-item-subtitle>
            <!-- {{ $store.state.user.email  }} -->
            yjkbako@gmail.com
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-divider />
      <!-- ---------------------------------------------- -->
      <!-- Menu Area -->
      <!-- ---------------------------------------------- -->

      <v-divider />
      <!-- ---------------------------------------------- -->
      <!-- Logout Area -->
      <!-- ---------------------------------------------- -->
      <v-list variant="flat" elevation="0" :lines="false" density="compact">
        <v-list-item color="primary" link @click="" density="compact">
          <template v-slot:prepend>
            <Icon
              class="ml-4 mr-6 text-primary"
              width="22"
              icon="solar:user-circle-line-duotone"
            />
          </template>

          <div>
            <v-list-item-subtitle class="font-weight-bold">
              用户信息
            </v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
      <v-divider />
      <!-- ---------------------------------------------- -->
      <!-- Logout Area -->
      <!-- ---------------------------------------------- -->
      <v-list variant="flat" elevation="0" :lines="false" density="compact">
        <v-list-item
          color="primary"
          link
          @click="handleLogout"
          density="compact"
        >
          <template v-slot:prepend>
            <Icon
              width="22"
              icon="solar:logout-2-line-duotone"
              class="ml-4 mr-6 text-primary"
            />
          </template>

          <div>
            <v-list-item-subtitle class="font-weight-bold">
              退出登录
            </v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<style scoped lang="scss"></style>
