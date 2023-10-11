<template>
    <v-expansion-panels disabled>
        <v-expansion-panel v-for="i in 3" :key="i" elevation="0">
            <v-expansion-panel-title> Item #{{ i }} </v-expansion-panel-title>
            <v-expansion-panel-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
                leo lobortis eget.
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
