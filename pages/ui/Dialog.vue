<script setup lang="ts">
import UiCard from '@/components/common/UiCard.vue';
import DialogsActivator from '@/components/ui-components/dialogs/DialogsActivator.vue';
import DialogsModel from '@/components/ui-components/dialogs/DialogsModel.vue';
import DialogsFullscreen from '@/components/ui-components/dialogs/DialogsFullscreen.vue';
import DialogsTransitions from '@/components/ui-components/dialogs/DialogsTransitions.vue';
import DialogsPersistent from '@/components/ui-components/dialogs/DialogsPersistent.vue';
import DialogsScrollable from '@/components/ui-components/dialogs/DialogsScrollable.vue';
import DialogsForm from '@/components/ui-components/dialogs/DialogsForm.vue';
import DialogsNested from '@/components/ui-components/dialogs/DialogsNested.vue';

</script>

<template>
    <v-row>
        <v-col cols="12" sm="12" lg="4">
            <UiCard title="Simple">
                <DialogsActivator />
            </UiCard>
        </v-col>
        <v-col cols="12" sm="12" lg="4">
            <UiCard title="V-model">
                <DialogsModel />
            </UiCard>
        </v-col>
        <v-col cols="12" sm="12" lg="4">
            <UiCard title="Transition">
                <DialogsTransitions />
            </UiCard>
        </v-col>
        <v-col cols="12" sm="12" lg="4">
            <UiCard title="Form">
                <DialogsForm />
            </UiCard>
        </v-col>
        <v-col cols="12" sm="12" lg="4">
            <UiCard title="Dialog Fullscreen">
                <DialogsFullscreen />
            </UiCard>
        </v-col>

        <v-col cols="12" sm="12" lg="4">
            <UiCard title="Persistent">
                <DialogsPersistent />
            </UiCard>
        </v-col>
        <v-col cols="12" sm="12" lg="4">
            <UiCard title="Scrollable">
                <DialogsScrollable />
            </UiCard>
        </v-col>

        <v-col cols="12" sm="12" lg="4">
            <UiCard title="Nested Dialog">
                <DialogsNested />
            </UiCard>
        </v-col>
    </v-row>
</template>
