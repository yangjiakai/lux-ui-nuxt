<script setup lang="ts">
// common components
import UiChildCard from '@/components/common/UiCard.vue';
import FilledColor from '@/components/ui-components/chip/FilledColor.vue';
import Outlined from '@/components/ui-components/chip/Outlined.vue';
import CustomIcon from '@/components/ui-components/chip/CustomIcon.vue';
import CustomIconOutlined from '@/components/ui-components/chip/CustomIconOutlined.vue';
import Disabled from '@/components/ui-components/chip/Disabled.vue';
import Sizes from '@/components/ui-components/chip/Sizes.vue';
import Closable from '@/components/ui-components/chip/Closable.vue';

</script>

<template>
    <v-row>
        <!-- Filled Color -->
        <v-col cols="12">
            <UiChildCard title="Filled">
                <FilledColor />
            </UiChildCard>
        </v-col>
        <!-- Outlined -->
        <v-col cols="12">
            <UiChildCard title="Outlined">
                <Outlined />
            </UiChildCard>
        </v-col>
        <!-- Label with Icon -->
        <v-col cols="12" lg="6">
            <UiChildCard title="Custom Icon">
                <CustomIcon />
            </UiChildCard>
        </v-col>
        <!-- Outlined Color -->
        <v-col cols="12" lg="6">
            <UiChildCard title="Custom Outlined Icon">
                <CustomIconOutlined />
            </UiChildCard>
        </v-col>
        <!-- Disabled -->
        <v-col cols="12" lg="6">
            <UiChildCard title="Disabled">
                <Disabled />
            </UiChildCard>
        </v-col>
        <!-- Sizes -->
        <v-col cols="12" lg="6">
            <UiChildCard title="Sizes">
                <Sizes />
            </UiChildCard>
        </v-col>
        <!-- Closable -->
        <v-col cols="12">
            <UiChildCard title="Closable">
                <Closable />
            </UiChildCard>
        </v-col>
    </v-row>
</template>
