<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const logs = ref([
  {
    version: "V3.2.1",
    publishTime: "March 10, 2024",
    coverImg: "https://static.trancy.org/cms/changelog/banner_3.0.0.jpg",
    content: {
      newPlatform: [
        "Mobile Extension for iOS device",
        "Mobile Extension for Android device",
        "Desktop Extension for Firefox",
        "Desktop Extension for macOS Safari (coming soon)",
        "Download link ：https://www.trancy.org/download",
      ],
      new: [
        "Added highlighting of new words on this page",
        "Added floating icon",
        "API now supports custom domain",
        "Added learning wordbook",
      ],
      fixed: ["Fixed video truncation issue", "Fixed youtube Adblock conflict"],
      improved: [
        "Optimized word highlighting",
        "Improved compatibility of immersive translation",
      ],
      aboutPreminum: [
        "Due to the cost of AI subtitles and platform deductions for the upcoming app, we will be implementing a 10% to 15% price increase by the end of January.",
      ],
    },
  },
  {
    version: "V3.2.1",
    publishTime: "March 10, 2024",
    coverImg: "https://static.trancy.org/cms/changelog/banner_3.0.0.jpg",
    content: {
      newPlatform: [
        "Mobile Extension for iOS device",
        "Mobile Extension for Android device",
        "Desktop Extension for Firefox",
        "Desktop Extension for macOS Safari (coming soon)",
        "Download link ：https://www.trancy.org/download",
      ],
      new: [
        "Added highlighting of new words on this page",
        "Added floating icon",
        "API now supports custom domain",
        "Added learning wordbook",
      ],
      fixed: ["Fixed video truncation issue", "Fixed youtube Adblock conflict"],
      improved: [
        "Optimized word highlighting",
        "Improved compatibility of immersive translation",
      ],
      aboutPreminum: [
        "Due to the cost of AI subtitles and platform deductions for the upcoming app, we will be implementing a 10% to 15% price increase by the end of January.",
      ],
    },
  },
  {
    version: "V3.2.1",
    publishTime: "March 10, 2024",
    coverImg: "https://static.trancy.org/cms/changelog/banner_3.0.0.jpg",
    content: {
      newPlatform: [
        "Mobile Extension for iOS device",
        "Mobile Extension for Android device",
        "Desktop Extension for Firefox",
        "Desktop Extension for macOS Safari (coming soon)",
        "Download link ：https://www.trancy.org/download",
      ],
      new: [
        "Added highlighting of new words on this page",
        "Added floating icon",
        "API now supports custom domain",
        "Added learning wordbook",
      ],
      fixed: ["Fixed video truncation issue", "Fixed youtube Adblock conflict"],
      improved: [
        "Optimized word highlighting",
        "Improved compatibility of immersive translation",
      ],
      aboutPreminum: [
        "Due to the cost of AI subtitles and platform deductions for the upcoming app, we will be implementing a 10% to 15% price increase by the end of January.",
      ],
    },
  },
]);
</script>

<template>
  <div class="h-full log-main">
    <v-card
      max-width="1080"
      class="mx-auto pa-5"
      variant="flat"
      color="transparent"
    >
      <v-row>
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="10">
          <h1 class="text-h3 font-weight-bold mt-10 mb-5">Changelog</h1>
          <p class="text-grey">New updates and improvements to Trancy</p>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      v-for="log in logs"
      :key="log.version"
      max-width="1080"
      class="mx-auto pa-5"
      variant="flat"
      color="transparent"
    >
      <v-row>
        <v-col cols="12" md="2">
          <div class="d-flex align-center">
            <span class="version">{{ log.version }}</span>
            <span class="date">{{ log.publishTime }}</span>
          </div>
        </v-col>
        <v-col cols="12" md="10">
          <v-img class="rounded-lg" :src="log.coverImg"></v-img>
          <!-- New New Platform -->
          <div v-if="log.content.newPlatform">
            <h3 class="text-h5 font-weight-bold my-10">New Platform</h3>
            <ul>
              <li class="log-item" v-for="item in log.content.newPlatform">
                {{ item }}
              </li>
            </ul>
          </div>
          <!-- New Area-->
          <div v-if="log.content.newPlatform">
            <h3 class="text-h5 font-weight-bold my-10">New</h3>
            <ul>
              <li class="log-item" v-for="item in log.content.new">
                {{ item }}
              </li>
            </ul>
          </div>
          <!-- Fixed Area-->
          <div v-if="log.content.fixed">
            <h3 class="text-h5 font-weight-bold my-10">Fixed</h3>
            <ul>
              <li class="log-item" v-for="item in log.content.fixed">
                {{ item }}
              </li>
            </ul>
          </div>
          <!-- Improved Area-->
          <div v-if="log.content.improved">
            <h3 class="text-h5 font-weight-bold my-10">Improved</h3>
            <ul>
              <li class="log-item" v-for="item in log.content.improved">
                {{ item }}
              </li>
            </ul>
          </div>
          <!-- About Premium Area-->
          <div v-if="log.content.aboutPreminum">
            <h3 class="text-h5 font-weight-bold my-10">About Premium</h3>
            <ul>
              <li class="log-item" v-for="item in log.content.aboutPreminum">
                {{ item }}
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-divider class="mt-15 mb-10"></v-divider>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.log-main {
  background-color: #05010d;
  color: #fff;
}

.version {
  display: flex;
  padding: 2px 4px;
  font-size: 11px;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid #8418f0;
}

.date {
  font-size: 14px;
  margin-left: 12px;
  color: grey;
}

.log-item {
  margin-bottom: 12px;
  line-height: 1.6em;
  font-size: 14px;
  position: relative;
  padding-left: 20px;
  list-style: none;
  color: rgba($color: #fff, $alpha: 0.8);
  &:before {
    content: "";
    display: block;
    width: 12px;
    height: 1px;
    background: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0.1),
      hsla(0, 0%, 100%, 0.6)
    );
    position: absolute;
    left: 0;
    top: 10px;
  }
}
</style>
