<template>
    <v-alert color="success" variant="tonal" class="mb-4">
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-checkbox-marked-circle-outline</v-icon>
        </template>
        <div>This is an success alert.</div>
    </v-alert>
    <v-alert color="info" variant="tonal" class="mb-4">
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-alert-circle-outline</v-icon>
        </template>
        <div>This is an info alert.</div>
    </v-alert>
    <v-alert color="warning" variant="tonal" class="mb-4">
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-alert-outline</v-icon>
        </template>
        <div>This is an warning alert.</div>
    </v-alert>
    <v-alert color="error" variant="tonal" class="mb-4">
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-alert-circle-outline</v-icon>
        </template>
        <div>This is an error alert.</div>
    </v-alert>
</template>
