<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
</script>

<template>
  <div class="d-flex align-center justify-center">
    <swiper-container class="mySwiper" effect="cards" grab-cursor="true">
      <swiper-slide class="bg-blue-darken-4">Slide 1</swiper-slide>
      <swiper-slide class="bg-blue-darken-3">Slide 2</swiper-slide>
      <swiper-slide class="bg-blue-darken-2">Slide 3</swiper-slide>
      <swiper-slide class="bg-blue-darken-1">Slide 4</swiper-slide>
      <swiper-slide class="bg-blue">Slide 5</swiper-slide>
      <swiper-slide class="bg-blue-lighten-1">Slide 6</swiper-slide>
      <swiper-slide class="bg-blue-lighten-2">Slide 7</swiper-slide>
      <swiper-slide class="bg-blue-lighten-3">Slide 8</swiper-slide>
      <swiper-slide class="bg-blue-lighten-4">Slide 9</swiper-slide>
      <swiper-slide class="bg-blue-lighten-5">Slide 10</swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped lang="scss">
swiper-container {
  width: 240px;
  height: 320px;
}

swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
</style>
