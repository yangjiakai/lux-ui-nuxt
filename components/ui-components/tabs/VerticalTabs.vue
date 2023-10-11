<script setup lang="ts">

const tab7 = ref(null);
</script>
<template>
    <v-row class="d-flex flex-row">
        <v-col cols="12" sm="3">
            <v-tabs v-model="tab7" direction="vertical" color="primary">
                <v-tab value="option-1" rounded="md" class="mb-3 text-left" height="70">
                    <UserIcon stroke-width="1.5" width="20" class="v-icon--start" />
                    <div>
                        <div>User Profile</div>
                        <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">Profile
                            Settings</span>
                    </div>
                </v-tab>
                <v-tab value="option-2" rounded="md" class="mb-3 text-left" height="70">
                    <FileDescriptionIcon stroke-width="1.5" width="20" class="v-icon--start" />
                    <div>
                        <div>Billing</div>
                        <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">Billing
                            Information</span>
                    </div>
                </v-tab>
                <v-tab value="option-3" rounded="md" class="mb-3 text-left" height="70">
                    <CreditCardIcon stroke-width="1.5" width="20" class="v-icon--start" />
                    <div>
                        <div>Payment</div>
                        <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">Add &
                            Update Card</span>
                    </div>
                </v-tab>
                <v-tab value="option-4" rounded="md" class="mb-3 text-left" height="70">
                    <KeyIcon stroke-width="1.5" width="20" class="v-icon--start" />
                    <div>
                        <div>Change Password</div>
                        <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">Update
                            Profile Security</span>
                    </div>
                </v-tab>
            </v-tabs>
        </v-col>
        <v-col cols="12" sm="9">
            <v-window v-model="tab7" class="bg-lightprimary">
                <v-window-item value="option-1">
                    <v-card variant="outlined">
                        <v-card-text>
                            <p>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon
                                officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod.
                            </p>

                            <p class="mt-4">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon
                                officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-2">
                    <v-card variant="outlined">
                        <v-card-text>
                            <p>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon
                                officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod.
                            </p>

                            <p class="mt-4">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon
                                officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-3">
                    <v-card variant="outlined">
                        <v-card-text>
                            <p>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon
                                officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod.
                            </p>

                            <p class="mt-4">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon
                                officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-4">
                    <v-card variant="outlined">
                        <v-card-text>
                            <p>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon
                                officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod.
                            </p>

                            <p class="mt-4">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon
                                officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-col>
    </v-row>
</template>
