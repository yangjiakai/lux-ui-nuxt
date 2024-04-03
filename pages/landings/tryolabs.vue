<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import InfiniteScroll from '@/components/animation/InfiniteScroll.vue';
const services = [
  {
    title: "Price Optimization",
    description:
      "Revolutionize your pricing strategy. Transform pricing challenges into growth opportunities.",
    icon: "https://tryolabs.imgix.net/icons/white/price-check.svg?auto=format&fit=max&w=96",
    link: "/services/price-optimization",
  },
  {
    title: "Demand Forecasting",
    description:
      "Elevate your demand forecasting accuracy, reduce excess inventory, and maximize current stock value.",
    icon: "https://tryolabs.imgix.net/icons/white/bar-chart-flag.svg?auto=format&fit=max&w=96",
    link: "/services/demand-forecasting",
  },
  {
    title: "Data Engineering",
    description:
      "Turn the most complex datasets into actionable insights, regardless of their volume, origin, or type.",
    icon: "https://tryolabs.imgix.net/icons/white/database.svg?auto=format&fit=max&w=96",
    link: "/services/data-engineering",
  },
  {
    title: "Edge Computing",
    description:
      "Deploy edge computing for real-time decisions. Ensure unparalleled accuracy, speed, and data privacy at the source.",
    icon: "https://tryolabs.imgix.net/icons/white/ai-chip.svg?auto=format&fit=max&w=96",
    link: "/services/edge-computing",
  },
  {
    title: "Video Analytics",
    description:
      "Extract actionable insights from videos. Mastering perception and advanced video analytics.",
    icon: "https://tryolabs.imgix.net/icons/white/camera.svg?auto=format&fit=max&w=96",
    link: "/services/video-analytics",
  },
  {
    title: "Transformers LLMs",
    description:
      "Leverage the precision of LLMs and embrace the broader potential of Generative AI.",
    icon: "https://tryolabs.imgix.net/icons/white/robot.svg?auto=format&fit=max&w=96",
    link: "/services/transformers",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Empower your business with bespoke AI solutions. Streamline and enhance processes for exceptional results.",
    icon: "https://tryolabs.imgix.net/icons/white/target-2.svg?auto=format&fit=max&w=96",
    link: "/services/custom-ai",
  },
  {
    title: "Product Matching",
    description:
      "Match products seamlessly with advanced AI. Upgrade to a solution that's built to scale.",
    icon: "https://tryolabs.imgix.net/icons/white/search-refraction.svg?auto=format&fit=max&w=96",
    link: "/services/product-matching",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Transform maintenance with AI-driven predictions. Cut costs, minimize downtime, and get higher productivity.",
    icon: "https://tryolabs.imgix.net/icons/white/tools.svg?auto=format&fit=max&w=96",
    link: "/services/predictive-maintenance",
  },
];
</script>

<template>
  <div class=" h-full">
    <!-- Toolbar -->
    <v-toolbar color="primary">
      <div class="ml-5 mr-5">
        <h3 class="text-h5 font-weight-bold">Vuetify</h3>
      </div>
      <v-btn active class="text-none" stacked> Home </v-btn>
      <v-btn class="text-none" stacked> Products </v-btn>
      <v-btn class="text-none" stacked> Services </v-btn>
      <v-btn class="text-none" stacked> Contact </v-btn>
      <v-btn class="text-none" stacked> About </v-btn>
      <v-spacer></v-spacer>

      <v-btn class="text-none"> En </v-btn>
    </v-toolbar>
    <!-- Hero -->
    <div>
      <v-card height="340" flat class="my-15">
        <div
          class="d-flex flex-column align-center justify-space-around h-full"
        >
          <p>HANDS-ON AI CONSULTING COMPANY</p>
          <h1 class="text-h3 font-weight-black">Accelerate your</h1>
          <h1 class="text-h3 font-weight-black gradient-text">AI adoption</h1>
          <p>We help leading companies accelerate their AI adoption</p>
          <p>to drive business results</p>
          <v-btn rounded color="primary">LET US TALK</v-btn>
        </div>
      </v-card>
    </div>
    <!-- Clients -->
    <div>
      <v-card height="340" flat class="my-15">
        <div
          class="d-flex flex-column align-center justify-space-around h-full"
        >
          <p>OUR CLIENTS</p>
          <InfiniteScroll/>
          <!-- logo list box -->
          <div class="d-flex flex-row justify-center">
            <v-img
              width="100"
              class="mx-2"
              v-for="i in 6"
              :key="i"
              src="https://cdn.worldvectorlogo.com/logos/atw-27679.svg"
            ></v-img>
          </div>
          <div class="d-flex flex-row justify-center">
            <v-img
              width="100"
              class="mx-2"
              v-for="i in 6"
              :key="i"
              src="https://cdn.worldvectorlogo.com/logos/atw-27679.svg"
            ></v-img>
          </div>
        </div>
      </v-card>
    </div>

    <!-- Since -->
    <div class="since-section py-15">
      <v-card
        max-width="1200px"
        class="mx-auto pa-5 text-white"
        flat
        color="transparent"
      >
        <p>SINCE 2009</p>
        <div class="text-h3 font-weight-black my-15">
          <span class="gradient-text mr-3">AI</span>
          <span>transformation partners</span>
        </div>
        <v-row align="center">
          <v-col cols="12" md="6">
            <video
              src="https://tryolabs.com/pages/index/ai-transformation-partners/bubble.mp4"
              preload="auto"
              style="width: 100%; height: 100%"
              autoplay="true"
              loop
            ></video>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-10 mb-5" color="#211E39" rounded="xl">
              <p class="text-h5 font-weight-bold mb-3">
                <v-icon class="mr-2">mdi-pen</v-icon>AI Acceleration
              </p>
              <p>
                Stay at the forefront of the ever-evolving digital landscape. We
                leverage the industry expertise of our clients combined with our
                technical background, providing a fast ramp-up.
              </p>
            </v-card>
            <v-card class="pa-10 mb-5" color="#211E39" rounded="xl">
              <p class="text-h5 font-weight-bold mb-3">
                <v-icon class="mr-2">mdi-pen</v-icon>AI Acceleration
              </p>
              <p>
                Stay at the forefront of the ever-evolving digital landscape. We
                leverage the industry expertise of our clients combined with our
                technical background, providing a fast ramp-up.
              </p>
            </v-card>
            <v-card class="pa-10" color="#211E39" rounded="xl">
              <p class="text-h5 font-weight-bold mb-3">
                <v-icon class="mr-2">mdi-pen</v-icon>AI Acceleration
              </p>
              <p>
                Stay at the forefront of the ever-evolving digital landscape. We
                leverage the industry expertise of our clients combined with our
                technical background, providing a fast ramp-up.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <!-- Service -->
    <div class="service-section py-15">
      <v-card
        max-width="1200px"
        class="mx-auto pa-5 text-white"
        flat
        color="transparent"
      >
        <p>OUR SERVICES</p>
        <div class="text-h3 font-weight-black my-15">
          <span class="gradient-text mr-3">Accelerate</span>
          <span> your AI journey</span>
        </div>
        <v-container>
          <v-row align="center">
            <v-col cols="12" sm="6" md="4" v-for="(service, index) in services">
              <v-card
                class="service-item-card pa-10"
                :key="index"
                rounded="xl"
                flat
              >
                <p class="text-h5 font-weight-bold mb-3">
                  <p><v-icon class="mr-2">mdi-pen</v-icon></p> 
                  <p class="mt-2">{{ service.title }}</p>
                </p>
   
                <p>
                  {{ service.description }}
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-text {
  font-family: sans-serif !important;
}

.gradient-text {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.since-section {
  background-image: linear-gradient(180deg, #0b0723, #0b0729);
}

.service-section {
  background-image: linear-gradient(180deg, #0b0729, #0500fe);
}

.service-item-card {
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  color: white;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background-color: rgba(255, 255, 255, 0.3);
  }
}
</style>
