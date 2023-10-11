<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
<template>
    <v-list>
        <v-card variant="outlined" class="py-2">
            <div class="text-subttile-2 pl-4 py-3">Nested List Items</div>
            <v-list-item value="Send" class="mb-2" active-color="primary">
                <template v-slot:prepend>
                    <Icon width="20" class="mr-3" icon="solar:map-arrow-right-line-duotone" />
                </template>
                <v-list-item-title>Sent Mail</v-list-item-title>
            </v-list-item>
            <v-list-item value="draft" class="mb-2" active-color="primary">
                <template v-slot:prepend>
                    <Icon width="20" class="mr-3" icon="solar:letter-unread-line-duotone" />
                </template>
                <v-list-item-title>Drafts</v-list-item-title>
            </v-list-item>
            <v-list-group value="Users">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" rounded="md" active-color="primary" title="Inbox">
                        <template v-slot:prepend>
                            <Icon width="20" class="mr-3" icon="solar:letter-opened-line-duotone" />
                        </template>
                    </v-list-item>
                </template>
                <v-list-item value="Started" active-color="primary" title="Started" rounded="md">
                    <template v-slot:prepend>
                        <Icon width="20" class="mr-3" icon="solar:star-line-duotone" />
                    </template>
                </v-list-item>
            </v-list-group>
        </v-card>
    </v-list>
</template>
