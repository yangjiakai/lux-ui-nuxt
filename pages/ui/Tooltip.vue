<script setup>

import BaseBreadcrumb from '@/components/common/BaseBreadcrumb.vue';
import SimpleTooltip from "@/components/ui-components/tooltip/SimpleTooltip.vue";
import IconTooltip from "@/components/ui-components/tooltip/IconTooltip.vue";
import ToggleTolltip from "@/components/ui-components/tooltip/ToggleTolltip.vue";
</script>
<template>
    <v-row>
        <v-col cols="12" md="6">
            <UiParentCard title="Simple">
                <SimpleTooltip />
            </UiParentCard>
        </v-col>
        <v-col cols="12" md="6">
            <UiParentCard title="Icon">
                <IconTooltip />
            </UiParentCard>
        </v-col>
        <v-col cols="12">
            <UiParentCard title="Toggle Tolltip">
                <ToggleTolltip />
            </UiParentCard>
        </v-col>
    </v-row>
</template>
