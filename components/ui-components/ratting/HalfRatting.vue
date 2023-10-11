<script setup lang="ts">

const rating2 = ref(2.5);
</script>
<template>
    <div>
        <v-rating v-model="rating2" half-increments density="compact" color="warning"></v-rating>
    </div>
</template>
