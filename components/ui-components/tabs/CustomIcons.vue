<template>
   <v-sheet elevation="0">
     <v-tabs
       bg-color="primary"
       next-icon="mdi-arrow-right-bold-box-outline"
       prev-icon="mdi-arrow-left-bold-box-outline"
       show-arrows
     >
       <v-tab
         v-for="i in 30"
         :key="i"
       >
         Item {{ i }}
       </v-tab>
     </v-tabs>
   </v-sheet>
 </template>