<script setup lang="ts">

const rating6 = ref(3);
const rating7 = ref(2);
</script>
<template>
    <div>
        <v-rating v-model="rating6" :item-labels="['sad', '', '', '', 'happy']" item-label-position="top" color="warning"
            density="compact" hover></v-rating>
        <v-rating class="mb-0 d-block" v-model="rating6" color="warning" density="compact" hover></v-rating>

    </div>
</template>
