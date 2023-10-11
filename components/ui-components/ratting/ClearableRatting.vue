<script setup lang="ts">

const rating3 = ref(3);
</script>
<template>
    <div>
        <v-rating v-model="rating3" clearable density="compact" color="warning"></v-rating>
    </div>
</template>
