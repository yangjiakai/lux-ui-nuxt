<script setup lang="ts">

const rating = ref(3);
</script>
<template>
    <div>
        <v-rating v-model="rating" density="compact" color="warning"></v-rating>
    </div>
</template>
