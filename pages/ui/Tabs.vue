
<script setup lang="ts">

// common components

import UiCard from '@/components/common/UiCard.vue';
import BasicTabs from "@/components/ui-components/tabs/BasicTabs.vue";
import CenterTabs from "@/components/ui-components/tabs/CenterTabs.vue";
import ColorTabs from "@/components/ui-components/tabs/ColorTabs.vue";
import DisableTabs from "@/components/ui-components/tabs/DisableTabs.vue";
import IconsWithLabelTabs from "@/components/ui-components/tabs/IconsWithLabelTabs.vue";
import IconTabs from "@/components/ui-components/tabs/IconTabs.vue";
import CustomIcons from "@/components/ui-components/tabs/CustomIcons.vue";
import AlignCenterTabs from "@/components/ui-components/tabs/AlignCenterTabs.vue";
import AlignEndTabs from "@/components/ui-components/tabs/AlignEndTabs.vue";

</script>

<template>
    <v-row>
        <!-- Basic -->
        <v-col cols="12" lg="6">
            <UiCard title="Basic">
                <BasicTabs />
            </UiCard>
        </v-col>
        <!-- With Icons -->
        <v-col cols="12" lg="6">
            <UiCard title="Stacked">
                <IconsWithLabelTabs />
            </UiCard>
        </v-col>
        <!-- Center -->
        <v-col cols="12" lg="6">
            <UiCard title="Center Active">
                <CenterTabs />
            </UiCard>
        </v-col>
        <!-- Custom Icons -->
        <v-col cols="12" lg="6">
            <UiCard title="Custom Icons">
                <CustomIcons />
            </UiCard>
        </v-col>
        <!-- Align Center -->
        <v-col cols="12" lg="6">
            <UiCard title="Align Center">
                <AlignCenterTabs />
            </UiCard>
        </v-col>
        <!-- Align End -->
        <v-col cols="12" lg="6">
            <UiCard title="Align End">
                <AlignEndTabs />
            </UiCard>
        </v-col>
        <!-- Icons -->
        <v-col cols="12" lg="6">
            <UiCard title="Icon">
                <IconTabs />
            </UiCard>
        </v-col>
        <!-- Disabled -->
        <v-col cols="12" lg="6">
            <UiCard title="Disabled">
                <DisableTabs />
            </UiCard>
        </v-col>
        <!-- Colors -->
        <v-col cols="12" lg="6">
            <UiCard title="Colors">
                <ColorTabs />
            </UiCard>
        </v-col>
    </v-row>
</template>
