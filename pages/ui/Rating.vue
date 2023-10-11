<script setup lang="ts">

// common components
import BaseBreadcrumb from '@/components/common/BaseBreadcrumb.vue';

import UiChildCard from '@/components/common/UiCard.vue';

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
            <UiParentCard title="Rating">
                <v-row>
                    <!-- Basic -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Basic">
                            <BasicRatting />
                        </UiChildCard>
                    </v-col>
                    <!-- Read Only -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Read Only">
                            <ReadOnlyRatting />
                        </UiChildCard>
                    </v-col>
                    <!-- Clearable -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Clearable">
                            <ClearableRatting />
                        </UiChildCard>
                    </v-col>
                    <!-- Hover -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Hover">
                            <HoverRatting />
                        </UiChildCard>
                    </v-col>
                    <!-- Half Ratting -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Half Ratting">
                            <HalfRatting />
                        </UiChildCard>
                    </v-col>
                    <!-- Length Ratting -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Length">
                            <LengthRatting />
                        </UiChildCard>
                    </v-col>
                    <!-- Label -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Label">
                            <LabelRatting />
                        </UiChildCard>
                    </v-col>
                    <!-- Icons -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Icons">
                            <IconsRatting />
                        </UiChildCard>
                    </v-col>
                    <!-- Size -->
                    <v-col cols="12" lg="4">
                        <UiChildCard title="Size">
                            <SizeRatting />
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
