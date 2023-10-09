<!--
* @Component: LanguageSwitcher.vue
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">

import { Icon } from "@iconify/vue";
import { useLocale } from "vuetify";

const { current } = useLocale();
const availableLocales = [
  {
    code: "en",
    flag: "us",
    name: "united-states",
    label: "English",

  },
  {
    code: "zhHans",
    flag: "cn",
    name: "china",
    label: "中文",

  },
  {
    code: "ja",
    flag: "jp",
    name: "japan",
    label: "日本語",
  },
];

const setLocale = (locale: string) => {
  current.value = locale;
};
</script>
<template>
  <v-menu>
    <template v-slot:activator="{ props }">

      <v-btn icon v-bind="props">
        <v-icon color="primary">mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list nav>
      <v-list-item v-for="locale in availableLocales" :key="locale.code" @click="setLocale(locale.code)" density="compact"
        :active="locale.code === current">
        <template v-slot:prepend>
          <Icon :icon="`twemoji:flag-${locale.name}`" class="mr-2" />
        </template>
        <v-list-item-title> {{ locale.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
