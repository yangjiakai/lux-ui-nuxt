<script setup lang="ts">


import UiCard from '@/components/common/UiCard.vue';

import BasicRatting from "@/components/ui-components/ratting/BasicRatting.vue";
import ClearableRatting from "@/components/ui-components/ratting/ClearableRatting.vue";
import HalfRatting from "@/components/ui-components/ratting/HalfRatting.vue";
import HoverRatting from "@/components/ui-components/ratting/HoverRatting.vue";
import IconsRatting from "@/components/ui-components/ratting/IconsRatting.vue";
import LabelRatting from "@/components/ui-components/ratting/LabelRatting.vue";
import ReadOnlyRatting from "@/components/ui-components/ratting/ReadOnlyRatting.vue";
import SizeRatting from "@/components/ui-components/ratting/SizeRatting.vue";
import LengthRatting from "@/components/ui-components/ratting/LengthRatting.vue";
</script>

<template>
    <v-row>
        <v-col cols="12">

            <v-row>
                <!-- Basic -->
                <v-col cols="12" md="4" lg="3">
                    <UiCard title="Basic">
                        <BasicRatting />
                    </UiCard>
                </v-col>
                <!-- Read Only -->
                <v-col cols="12" md="4" lg="3">
                    <UiCard title="Read Only">
                        <ReadOnlyRatting />
                    </UiCard>
                </v-col>
                <!-- Clearable -->
                <v-col cols="12" md="4" lg="3">
                    <UiCard title="Clearable">
                        <ClearableRatting />
                    </UiCard>
                </v-col>
                <!-- Hover -->
                <v-col cols="12" md="4" lg="3">
                    <UiCard title="Hover">
                        <HoverRatting />
                    </UiCard>
                </v-col>
                <!-- Half Ratting -->
                <v-col cols="12" md="4" lg="3">
                    <UiCard title="Half Ratting">
                        <HalfRatting />
                    </UiCard>
                </v-col>
                <!-- Length Ratting -->
                <v-col cols="12" md="4" lg="3">
                    <UiCard title="Length">
                        <LengthRatting />
                    </UiCard>
                </v-col>
                <!-- Label -->
                <v-col cols="12" md="4" lg="3">
                    <UiCard title="Label">
                        <LabelRatting />
                    </UiCard>
                </v-col>
                <!-- Icons -->
                <v-col cols="12" md="4" lg="3">
                    <UiCard title="Icons">
                        <IconsRatting />
                    </UiCard>
                </v-col>
                <!-- Size -->
                <v-col cols="12" md="4" lg="3">
                    <UiCard title="Size">
                        <SizeRatting />
                    </UiCard>
                </v-col>
            </v-row>

        </v-col>
    </v-row>
</template>
