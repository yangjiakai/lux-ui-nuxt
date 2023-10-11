<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
    <div class="d-flex align-center gap-2 justify-center">
        <v-avatar size="40" color="primary" variant="flat">
            <Icon icon="solar:emoji-funny-circle-line-duotone" />
        </v-avatar>
        <v-avatar size="40" variant="flat" color="secondary">
            <Icon icon="solar:emoji-funny-circle-line-duotone" />
        </v-avatar>
        <v-avatar size="40" color="error" variant="flat">
            <Icon icon="solar:emoji-funny-circle-line-duotone" />
        </v-avatar>
        <v-avatar size="40" color="warning" variant="flat">
            <Icon icon="solar:emoji-funny-circle-line-duotone" />
        </v-avatar>
        <v-avatar size="40" color="success" variant="flat">
            <Icon icon="solar:emoji-funny-circle-line-duotone" />
        </v-avatar>
    </div>
</template>
