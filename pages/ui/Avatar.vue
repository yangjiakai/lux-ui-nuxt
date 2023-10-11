<script setup lang="ts">
import UiChildCard from '@/components/common/UiCard.vue';
import ImageAvatar from '@/components/ui-components/avatar/ImageAvatar.vue';
import LetterAvatar from '@/components/ui-components/avatar/LetterAvatar.vue';
import IconAvatar from '@/components/ui-components/avatar/IconAvatar.vue';
import VariantAvatar from '@/components/ui-components/avatar/VariantAvatar.vue';
import SizeAvatar from '@/components/ui-components/avatar/SizeAvatar.vue';

</script>

<template>
    <v-row>
        <!-- Image Avatar -->
        <v-col cols="12" lg="4">
            <UiChildCard title="Image Avatars">
                <ImageAvatar />
            </UiChildCard>
        </v-col>
        <!-- Letter Avatar -->
        <v-col cols="12" lg="4">
            <UiChildCard title="Letter Avatars">
                <LetterAvatar />
            </UiChildCard>
        </v-col>
        <!-- Icon Avatar -->
        <v-col cols="12" lg="4">
            <UiChildCard title="Icon Avatars">
                <IconAvatar />
            </UiChildCard>
        </v-col>
        <!-- Variant Avatar -->
        <v-col cols="12" lg="4">
            <UiChildCard title="Variant" class="pb-10">
                <VariantAvatar />
            </UiChildCard>
        </v-col>
        <!-- Size Avatar -->
        <v-col cols="12" lg="8">
            <UiChildCard title="Sizes">
                <SizeAvatar />
            </UiChildCard>
        </v-col>
    </v-row>
</template>
