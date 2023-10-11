<script setup lang="ts">


</script>
<template>
    <div class="d-flex flex-column flex-sm-row flex-wrap flex-xl-nowrap align-center gap-3">
        <v-chip disabled variant="outlined">
            <MoodSmileIcon class="mr-2" start size="20" />
            Custom Icon
            <ChecksIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip color="secondary" disabled variant="outlined">
            <UserCircleIcon class="mr-2" start size="20" />
            Custom Icon
            <ChecksIcon class="ml-2" start size="20" />
        </v-chip>
    </div>
</template>
