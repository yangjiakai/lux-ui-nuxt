<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const images = ref([
  { url: "https://picsum.photos/seed/1/300/400", alt: "Random image 1" },
  { url: "https://picsum.photos/seed/2/300/500", alt: "Random image 2" },
  { url: "https://picsum.photos/seed/3/300/350", alt: "Random image 3" },
  { url: "https://picsum.photos/seed/4/300/450", alt: "Random image 4" },
  { url: "https://picsum.photos/seed/5/300/550", alt: "Random image 5" },
  { url: "https://picsum.photos/seed/6/300/400", alt: "Random image 6" },
  { url: "https://picsum.photos/seed/7/300/500", alt: "Random image 7" },
  { url: "https://picsum.photos/seed/8/300/350", alt: "Random image 8" },
  { url: "https://picsum.photos/seed/9/300/450", alt: "Random image 9" },
  { url: "https://picsum.photos/seed/10/300/550", alt: "Random image 10" },
  { url: "https://picsum.photos/seed/11/300/400", alt: "Random image 11" },
  { url: "https://picsum.photos/seed/12/300/500", alt: "Random image 12" },
  { url: "https://picsum.photos/seed/13/300/350", alt: "Random image 13" },
  { url: "https://picsum.photos/seed/14/300/450", alt: "Random image 14" },
  { url: "https://picsum.photos/seed/15/300/550", alt: "Random image 15" },
  { url: "https://picsum.photos/seed/16/300/400", alt: "Random image 16" },
  { url: "https://picsum.photos/seed/17/300/500", alt: "Random image 17" },
  { url: "https://picsum.photos/seed/18/300/350", alt: "Random image 18" },
  { url: "https://picsum.photos/seed/19/300/450", alt: "Random image 19" },
  { url: "https://picsum.photos/seed/20/300/550", alt: "Random image 20" },
]);

const newImageUrl = ref("");

const addImage = () => {
  // https://picsum.photos/seed/20/300/550 随机一张picsum的图片
  let imgUrl = `https://picsum.photos/seed/${images.value.length + 1}/300/550`;

  images.value.push({
    url: imgUrl,
    alt: `New image ${images.value.length + 1}`,
  });
  newImageUrl.value = "";
};

const deleteImage = () => {
  // Remove the last image
  images.value.pop();
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 控制面板 -->
    <div class="bg-white shadow-md rounded-lg p-6 mb-8">
      <v-btn color="primary" width="100" class="mr-2" @click="addImage"
        >Add</v-btn
      >
      <v-btn color="error" width="100" @click="deleteImage">remove</v-btn>
    </div>

    <div
      class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-6 gap-4"
    >
      <div v-for="(image, index) in images" :key="index" class="mb-4">
        <img
          :src="image.url"
          :alt="image.alt"
          class="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
