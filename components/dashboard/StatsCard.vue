<script setup lang="ts">
import { Icon } from "@iconify/vue";
const earningCardsData = [
    {
        title: "Total Income",
        img: "solar:bill-line-duotone",
        number: "3233",
    },
    {
        title: "Total Expense",
        img: "solar:layers-minimalistic-line-duotone",
        number: "15783",
    },
    {
        title: "Total Visitors",
        img: "solar:users-group-two-rounded-line-duotone",
        number: "11245",
    },
    {
        title: "Total Subscribers",
        img: "solar:user-circle-line-duotone",
        number: "2124",
    }
]
</script>
<template>
    <div>
        <v-row>
            <v-col cols="12" lg="3" sm="6" v-for="revenuecard in earningCardsData" :revenuecard="revenuecard"
                :key="revenuecard.title" class="py-0 mb-3">
                <v-card elevation="10">
                    <span class="lstick"></span>
                    <v-card-text class="pa-5">
                        <div class="d-flex align-center">
                            <Icon class="text-primary mr-5" :icon="revenuecard.img" width="40" />
                            <div>
                                <h4 class="card-title mb-2">
                                    {{ revenuecard.title }}
                                </h4>
                                <h2 class="text-h5 ">
                                    {{ revenuecard.number }}
                                </h2>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
  
<style scoped>
.lstick {
    top: 45px;
}
</style>
  
  