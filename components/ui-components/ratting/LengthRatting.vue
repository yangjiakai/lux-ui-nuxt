<script setup lang="ts">

const rating = ref(3);
</script>
<template>
    <div>
        <v-rating v-model="rating" length="10" density="compact" color="warning"></v-rating>
    </div>
</template>
