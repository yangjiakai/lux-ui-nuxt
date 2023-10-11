<script setup lang="ts">
import UiChildCard from '@/components/common/UiCard.vue';
import SimpleList from '@/components/ui-components/list/SimpleList.vue';
import NestedList from '@/components/ui-components/list/NestedList.vue';
import FolderList from '@/components/ui-components/list/FolderList.vue';
import DisabledList from '@/components/ui-components/list/DisabledList.vue';
import SwitchList from '@/components/ui-components/list/SwitchList.vue';
import RoundedList from '@/components/ui-components/list/RoundedList.vue';
import CustomAlignList from '@/components/ui-components/list/CustomAlignList.vue';
import ScrollableList from '@/components/ui-components/list/ScrollableList.vue';
</script>

<template>
    <v-row>
        <!-- Basic -->
        <v-col cols="12" md="4" lg="3">
            <UiChildCard title="Simple List">
                <SimpleList />
            </UiChildCard>
        </v-col>
        <!-- Nested List -->
        <v-col cols="12" md="4" lg="3">
            <UiChildCard title="Nested List">
                <NestedList />
            </UiChildCard>
        </v-col>
        <!-- Folder List -->
        <v-col cols="12" md="4" lg="3">
            <UiChildCard title="Folder List">
                <FolderList />
            </UiChildCard>
        </v-col>
        <!-- DisabledList-->
        <v-col cols="12" md="4" lg="3">
            <UiChildCard title="Disabled List">
                <DisabledList />
            </UiChildCard>
        </v-col>
        <!-- Radio Button List -->
        <v-col cols="12" md="4" lg="3">
            <UiChildCard title="Switch List">
                <SwitchList />
            </UiChildCard>
        </v-col>

        <!-- Rounded List -->
        <v-col cols="12" md="4" lg="3">
            <UiChildCard title="Rounded List">
                <RoundedList />
            </UiChildCard>
        </v-col>
        <!-- Custom Aligned List -->
        <v-col cols="12" md="4" lg="3">
            <UiChildCard title="Custom Aligned List">
                <CustomAlignList />
            </UiChildCard>
        </v-col>
        <!-- Scrollable List -->
        <v-col cols="12" md="4" lg="3">
            <UiChildCard title="Scrollable List">
                <ScrollableList />
            </UiChildCard>
        </v-col>
    </v-row>
</template>
