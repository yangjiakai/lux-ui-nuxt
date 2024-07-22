<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";

/* -------------------------------
   Toolbar Area
------------------------------- */
// v-toolbar-items
const toolbarItems = ref([
  {
    icon: "solar:window-frame-line-duotone",
    title: "Dashboard",
  },
  {
    icon: "solar:notes-minimalistic-line-duotone",
    title: "Training Library",
  },
  {
    icon: "solar:user-circle-line-duotone",
    title: "My Profile",
  },
  {
    icon: "solar:library-line-duotone",
    title: "Resources",
  },
]);

/* -------------------------------
   Search Area
------------------------------- */
// v-select
const selectItems = ref([
  { text: "Option 1", value: "Option 1" },
  { text: "Option 2", value: "Option 2" },
  { text: "Option 3", value: "Option 3" },
]);

/* -------------------------------
   Sidebar Area
------------------------------- */
const menuItems = ref([
  {
    icon: "solar:window-frame-line-duotone",
    title: "All Products",
    count: 123,
  },
  {
    icon: "solar:notes-minimalistic-line-duotone",
    title: "Learning Paths",
    count: 10,
  },
  {
    icon: "solar:user-circle-line-duotone",
    title: "Courses",
    count: 145,
  },
  {
    icon: "solar:library-line-duotone",
    title: "Labs",
    count: 23,
  },
  // Quizz
  {
    icon: "solar:notes-minimalistic-line-duotone",
    title: "Quizzes",
    count: 13,
  },
  // Exam
  {
    icon: "solar:notes-minimalistic-line-duotone",
    title: "Exams",
    count: 3,
  },
  // Resources
  {
    icon: "solar:library-line-duotone",
    title: "Resources",
    count: 118,
  },
  // Blogs
  {
    icon: "solar:library-line-duotone",
    title: "Blogs",
    count: 112,
  },
  // Questions
  {
    icon: "solar:library-line-duotone",
    title: "Questions",
    count: 10,
  },
]);

// main area
const lessons = ref([
  {
    id: 1,
    title: "Amplify",
    url: "https://www.fintail.me/icons/AWS-Amplify.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 2,
    title: "AppSync",
    url: "https://www.fintail.me/icons/AWS-AppSync.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 3,
    title: "Auto-Scaling",
    url: "https://www.fintail.me/icons/AWS-Auto-Scaling.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 4,
    title: "Cloud9",
    url: "https://www.fintail.me/icons/AWS-Cloud9.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 5,
    title: "CloudFormation",
    url: "https://www.fintail.me/icons/AWS-CloudFormation.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 6,
    title: "CodeBuild",
    url: "https://www.fintail.me/icons/AWS-CodeBuild.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 7,
    title: "CodeCommit",
    url: "https://www.fintail.me/icons/AWS-CodeCommit.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 8,
    title: "CodeDeploy",
    url: "https://www.fintail.me/icons/AWS-CodeDeploy.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 9,
    title: "CodePipeline",
    url: "https://www.fintail.me/icons/AWS-CodePipeline.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 10,
    title: "CodeStar",
    url: "https://www.fintail.me/icons/AWS-CodeStar.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 11,
    title: "Command-Line Interface",
    url: "https://www.fintail.me/icons/AWS-Command-Line-Interface.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 12,
    title: "Config",
    url: "https://www.fintail.me/icons/AWS-Config.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 13,
    title: "Data Pipeline",
    url: "https://www.fintail.me/icons/AWS-Data-Pipeline.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 14,
    title: "Database Migration Service",
    url: "https://www.fintail.me/icons/AWS-Database-Migration-Service.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 15,
    title: "DeepLens",
    url: "https://www.fintail.me/icons/AWS-DeepLens.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 16,
    title: "DeepRacer",
    url: "https://www.fintail.me/icons/AWS-DeepRacer.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 17,
    title: "Device Farm",
    url: "https://www.fintail.me/icons/AWS-Device-Farm.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 18,
    title: "Direct Connect",
    url: "https://www.fintail.me/icons/AWS-Direct-Connect.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 19,
    title: "Elastic Beanstalk",
    url: "https://www.fintail.me/icons/AWS-Elastic-Beanstalk.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 20,
    title: "Fargate",
    url: "https://www.fintail.me/icons/AWS-Fargate.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 21,
    title: "Glue",
    url: "https://www.fintail.me/icons/AWS-Glue.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 22,
    title: "IoT 1-Click",
    url: "https://www.fintail.me/icons/AWS-IoT-1-Click.png",
    rating: 4.3,
    progress: 70,
  },
  {
    id: 23,
    title: "IoT Analytics",
    url: "https://www.fintail.me/icons/AWS-IoT-Analytics.png",
    rating: 4.3,
    progress: 70,
  },
]);

const searchStr = ref("");
const displayLessons = computed(() => {
  return lessons.value.filter((lesson) => {
    return lesson.title.toLowerCase().includes(searchStr.value.toLowerCase());
  });
});
</script>

<template>
  <div class="app-wrapper">
    <v-card class="h-full app-card" rounded="xl">
      <!-- Toolbar Area -->
      <v-toolbar class="px-5">
        <!-- Icon -->

        <Icon
          width="40"
          class="text-primary ml-5 mr-10"
          icon="tabler:brand-openai"
        />

        <!--  v-toolbar-items -->
        <v-toolbar-items>
          <v-btn color="grey-darken-3" v-for="item in toolbarItems" key="index">
            <Icon width="24" :icon="item.icon" />

            <span class="ml-1">{{ item.title }}</span>
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <!-- Avatar -->
        <v-avatar>
          <v-img
            alt="John"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          ></v-img>
        </v-avatar>
      </v-toolbar>
      <v-divider></v-divider>

      <!-- Search Area -->
      <div class="pa-5">
        <v-card class="d-flex align-center" variant="outlined">
          <!-- Select  -->

          <v-divider vertical></v-divider>
          <!-- Search Input -->
          <v-text-field
            v-model="searchStr"
            append-inner-icon="mdi-magnify"
            hide-details
            clearable
            placeholder="Search"
          >
          </v-text-field>
        </v-card>
      </div>
      <v-divider></v-divider>
      <div class="h-full d-flex">
        <!-- Sidebar Area -->
        <div class="left">
          <div class="px-1">
            <v-list>
              <v-list-subheader class="font-weight-bold"
                >PRODUCTS</v-list-subheader
              >

              <v-list-item
                v-for="(item, i) in menuItems"
                :key="i"
                :value="item"
                color="primary"
                rounded="shaped"
              >
                <template v-slot:prepend>
                  <Icon
                    width="26"
                    class="mx-5 bg-primary pa-1 rounded-sm"
                    :icon="item.icon"
                  ></Icon>
                </template>

                <v-list-item-title
                  class="font-weight-bold"
                  v-text="item.title"
                ></v-list-item-title>
                <template v-slot:append>
                  <div>
                    <v-chip label density="comfortable" color="primary">{{
                      item.count
                    }}</v-chip>
                  </div>
                </template>
              </v-list-item>
            </v-list>
          </div>
        </div>
        <div class="right pa-5">
          <!-- Main Area -->

          <!-- 左边为图片，中间为内容区域，右边为操作区域 -->
          <v-card
            v-for="lesson in displayLessons"
            :key="lesson.id"
            rounded="xl"
            height="220"
            min-width="1000"
            class="pa-5 mb-5 d-flex justify-center lesson-card"
          >
            <div>
              <v-img
                :aspect-ratio="1"
                :lazy-src="lesson.url"
                :src="lesson.url"
                width="180"
                cover
                class="rounded-xl"
              >
                <div
                  class="text-white text-center h-full d-flex flex-column-reverse"
                >
                  <div class="pa-2 img-title">
                    {{ lesson.title }}
                  </div>
                </div>
              </v-img>
            </div>

            <v-card-text
              class="px-3 py-1 d-flex flex-column justify-space-between"
            >
              <h2 class="text-h6 font-weight-bold">
                <v-chip class="mr-2" color="primary" label>
                  Developed with <span class="font-weight-bold ml-2">AWS</span>
                </v-chip>
                Get Started with {{ lesson.title }}
              </h2>
              <div class="d-flex align-center mt-3">
                <span class="font-weight-bold text-body-1">4.3</span>
                <v-rating
                  size="small"
                  density="compact"
                  v-model="lesson.rating"
                  active-color="yellow-accent-4"
                  color="orange-lighten-1"
                  class="mx-2"
                ></v-rating>
                <span class="text-grey">(12,232 ratings)</span>
                <span class="ml-2">Level:</span>
                <span class="font-weight-bold">Neginner</span>
                <span class="ml-2">Time:</span>
                <span class="font-weight-bold">1h 20m</span>
                <span class="ml-2">Students:</span>
                <span class="font-weight-bold">3793</span>
              </div>
              <div class="my-3 text-grey two-line">
                In this lab you will get up and running with Docker on Linux
                using a Microsoft Azure virtual machine. You will work with
                images from the public Docker registry, run a handful of
                containers,and create
              </div>
              <div>
                <v-chip
                  class="mr-2"
                  density="comfortable"
                  size="small"
                  color="blue"
                  label
                >
                  AWS
                </v-chip>
                <v-chip
                  class="mr-2"
                  density="comfortable"
                  size="small"
                  color="blue"
                  label
                >
                  Docker
                </v-chip>
                <v-chip
                  class="mr-2"
                  density="comfortable"
                  size="small"
                  color="blue"
                  label
                >
                  Linux
                </v-chip>
                <v-chip
                  class="mr-2"
                  density="comfortable"
                  size="small"
                  color="blue"
                  label
                >
                  Azure
                </v-chip>
              </div>
            </v-card-text>
            <v-divider vertical></v-divider>
            <div class="d-flex flex-column justify-space-between">
              <div class="d-flex align-center">
                <!-- Teacher -->
                <v-avatar class="mx-2">
                  <v-img
                    alt="John"
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                  ></v-img>
                </v-avatar>
                <div>
                  <div class="font-weight-bold">John Doe</div>
                  <div class="text-body-2">Cloud Computing COnsultant</div>
                </div>
              </div>
              <div class="px-3 d-flex align-center">
                <span class="text-success font-weight-bold"
                  >{{ lesson.progress }}%
                </span>
                <v-progress-linear
                  v-model="lesson.progress"
                  color="success"
                  height="15"
                ></v-progress-linear>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  height: calc(100vh - 64px);
  padding: 20px;
}

.left {
  width: 300px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.right {
  flex: 1;
  height: calc(100vh - 280px);
  overflow: auto;
}

.lesson-card {
  .img-title {
    background-color: rgba(255, 255, 255, 0.3);
    font-weight: bold;
  }
}
</style>
