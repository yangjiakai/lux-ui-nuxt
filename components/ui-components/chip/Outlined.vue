<script setup lang="ts">


</script>
<template>
    <div class="d-flex flex-wrap align-center gap-3">
        <v-chip variant="outlined" class="font-weight-bold">
            <MoodSmileIcon class="mr-2" start size="20" /> Default Filled
        </v-chip>
        <v-chip variant="outlined" class="font-weight-bold">
            <MoodSmileIcon class="mr-2" start size="20" /> Default Deletable
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip variant="outlined" color="primary" class="font-weight-bold">
            <v-avatar start size="25">
                <v-icon color="primary">mdi-check</v-icon>
            </v-avatar> Primary Filled
        </v-chip>
        <v-chip variant="outlined" color="primary" class="font-weight-bold">
            <v-avatar start size="25">
                <v-icon color="primary">mdi-check</v-icon>
            </v-avatar> Primary Deletable
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip variant="outlined" color="secondary" class="font-weight-bold">
            <MoodSmileIcon class="mr-2" start size="20" /> Secondary Filled
        </v-chip>
        <v-chip variant="outlined" color="secondary" class="font-weight-bold">
            <MoodSmileIcon class="mr-2" start size="20" /> Secondary Deletable
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip variant="outlined" color="success" class="font-weight-bold">
            <v-avatar start size="25">
                <v-icon color="success">mdi-check</v-icon>
            </v-avatar> Default Filled
        </v-chip>
        <v-chip variant="outlined" color="success" class="font-weight-bold">
            <v-avatar start size="25">
                <v-icon color="success">mdi-check</v-icon>
            </v-avatar> Default Deletable
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip variant="outlined" color="warning" class="font-weight-bold">
            <MoodSmileIcon class="mr-2" start size="20" /> Default Filled
        </v-chip>
        <v-chip variant="outlined" color="warning" class="font-weight-bold">
            <MoodSmileIcon class="mr-2" start size="20" /> Default Deletable
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
        <v-chip variant="outlined" color="error" class="font-weight-bold">
            <v-avatar start size="25">
                <v-icon color="error">mdi-check</v-icon>
            </v-avatar> Default Filled
        </v-chip>
        <v-chip variant="outlined" color="error" class="font-weight-bold">
            <v-avatar start size="25">
                <v-icon color="error">mdi-check</v-icon>
            </v-avatar> Default Deletable
            <CircleXIcon class="ml-2" start size="20" />
        </v-chip>
    </div>
</template>
