<script setup>


import SimpleTooltip from "@/components/ui-components/tooltip/SimpleTooltip.vue";
import IconTooltip from "@/components/ui-components/tooltip/IconTooltip.vue";
import ToggleTolltip from "@/components/ui-components/tooltip/ToggleTolltip.vue";
import UiCard from '@/components/common/UiCard.vue';
</script>
<template>
    <v-row>
        <v-col cols="12" md="6">
            <UiCard title="Simple">
                <SimpleTooltip />
            </UiCard>
        </v-col>
        <v-col cols="12" md="6">
            <UiCard title="Icon">
                <IconTooltip />
            </UiCard>
        </v-col>
        <v-col cols="12">
            <UiCard title="Toggle Tolltip">
                <ToggleTolltip />
            </UiCard>
        </v-col>
    </v-row>
</template>
