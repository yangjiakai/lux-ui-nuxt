<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const items = ref([
  {
    header: "Today",
  },
  { divider: true },
  {
    avatar: "https://picsum.photos/250/300?image=660",
    title: "Meeting @ Noon",
    subtitle: `<span class="font-weight-bold">Spike Lee</span> &mdash; I'll be in your neighborhood`,
  },
  {
    avatar: "https://picsum.photos/250/300?image=821",
    title: 'Summer BBQ <span class="text-grey-lighten-1"></span>',
    subtitle:
      '<span class="font-weight-bold">to Operations support</span> &mdash; Wish I could come.',
  },
  {
    avatar: "https://picsum.photos/250/300?image=783",
    title: "Yes yes",
    subtitle:
      '<span class="font-weight-bold">Bella</span> &mdash; Do you have Paris recommendations',
  },
  {
    header: "Yesterday",
  },
  { divider: true },
  {
    avatar: "https://picsum.photos/250/300?image=1006",
    title: "Dinner tonight?",
    subtitle:
      '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?',
  },
  {
    avatar: "https://picsum.photos/250/300?image=146",
    title: "So long",
    subtitle:
      '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?',
  },
  {
    header: "Last Week",
  },
  { divider: true },
  {
    avatar: "https://picsum.photos/250/300?image=1008",
    title: "Breakfast?",
    subtitle:
      '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?',
  },
  {
    avatar: "https://picsum.photos/250/300?image=839",
    title: 'Winter Porridge <span class="text-grey-lighten-1"></span>',
    subtitle:
      '<span class="font-weight-bold">cc: Daniel</span> &mdash; Tell me more...',
  },
  {
    avatar: "https://picsum.photos/250/300?image=145",
    title: "Oui oui",
    subtitle:
      '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?',
  },
]);
</script>

<template>
  <div class="screen-wraper pa-5">
    <v-card class="h-full pa-2">
      <v-card class="h-full pa-5" variant="outlined" color="blue-grey-darken-3">
        <h6 class="text-h6 font-weight-black">每日指标1/8</h6>
        <v-divider class="my-2" thick="3"></v-divider>
        <v-list lines="three">
          <template v-for="(item, index) in items">
            <v-list-subheader v-if="item.header" :key="item.header" inset>
              {{ item.header }}
            </v-list-subheader>

            <v-divider v-else-if="item.divider" :key="index" inset></v-divider>

            <v-list-item v-else :key="item.title" ripple>
              <template v-slot:title>
                <div v-html="item.title" class="font-weight-bold"></div>
              </template>

              <template v-slot:subtitle>
                <div v-html="item.subtitle" class="font-weight-bold"></div>
              </template>
              <template v-slot:prepend>
                <v-avatar size="100">
                  <v-img
                    :src="item.avatar"
                    :lazy-src="item.avatar"
                    width="100"
                    height="100"
                  ></v-img>
                </v-avatar>
              </template>

              <template v-slot:append>
                <v-img
                  :aspect-ratio="1"
                  class="bg-white rounded-lg"
                  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                  width="100"
                  cover
                ></v-img>
                <v-img
                  :aspect-ratio="1"
                  class="bg-white rounded-lg mx-3"
                  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                  width="100"
                  cover
                ></v-img>
                <v-btn
                  color="blue-grey-darken-3"
                  class="font-weight-bold"
                  width="160"
                >
                  前往
                </v-btn>
              </template>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-card>
  </div>
</template>

<style scoped lang="scss"></style>
