<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
    <div class="d-flex align-center gap-2 justify-center">
        <v-avatar size="40" color="primary" variant="flat">
            <Icon width="32" icon="solar:emoji-funny-circle-line-duotone" />
        </v-avatar>
        <v-avatar size="40" variant="flat" color="secondary">
            <Icon width="32" icon="solar:emoji-funny-circle-line-duotone" />
        </v-avatar>
        <v-avatar size="40" color="error" variant="flat">
            <Icon width="32" icon="solar:emoji-funny-circle-line-duotone" />
        </v-avatar>
        <v-avatar size="40" color="warning" variant="flat">
            <Icon width="32" icon="solar:emoji-funny-circle-line-duotone" />
        </v-avatar>
        <v-avatar size="40" color="success" variant="flat">
            <Icon width="32" icon="solar:emoji-funny-circle-line-duotone" />
        </v-avatar>
    </div>
</template>
