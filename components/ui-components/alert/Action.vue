<template>
    <v-alert type="warning"  density="compact" class="mb-4 single-line-alert" closable>
        <div>This is an warning alert  — check it out!</div>
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-alert-outline</v-icon>
        </template>
        <!-- <template v-slot:append>
            <v-btn variant="text" color="warning" class="ml-auto">Undo</v-btn>
        </template> -->
    </v-alert>
    <v-alert type="info"  density="compact" class="mb-4 single-line-alert" closable>
        <div>This is an info alert  — check it out!</div>
        <template v-slot:prepend>
            <v-icon class="text-24">mdi-alert-circle-outline</v-icon>
        </template>
<!--         
        <template v-slot:append>
            <v-btn variant="text" color="info" class="ml-auto">Undo</v-btn>
        </template> -->
    </v-alert>
</template>
