<template>
    <div class="d-flex flex-column flex-sm-row gap-3 justify-center">
        <v-btn  color="primary" flat>
            Start
            <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
        </v-btn>
        <v-btn  color="primary" flat>
            End
            <v-tooltip activator="parent" location="end">Tooltip</v-tooltip>
        </v-btn>
        <v-btn  color="primary" flat>
            Top
            <v-tooltip activator="parent" location="top">Tooltip</v-tooltip>
        </v-btn>
        <v-btn  color="primary" flat>
            Bottom
            <v-tooltip activator="parent" location="bottom">Tooltip</v-tooltip>
        </v-btn>
    </div>
</template>
