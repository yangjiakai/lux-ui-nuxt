<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import UiCard from '~/components/common/UiCard.vue';
import Types from '~/components/widgets/skeleton/Types.vue';
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000)
})
</script>

<template>
  <v-row>
    <v-col>
      <UiCard title="types">
        <Types />
      </UiCard>
    </v-col>
    <v-col cols="12">
      <UiCard title="card-avatar, actions">
        <v-row>
          <v-col v-for="i in 6" cols="12" sm="6" md="4" lg="2">
            <v-card>
              <v-skeleton-loader type="card-avatar, actions"></v-skeleton-loader>
            </v-card>
          </v-col>
        </v-row>
      </UiCard>
    </v-col>
    <v-col cols="12">
      <UiCard title="card-avatar, article, actions">
        <v-row>
          <v-col v-for="i in 6" cols="12" sm="6" md="4" lg="2">
            <v-card>
              <v-skeleton-loader type="card-avatar, article, actions"></v-skeleton-loader>
            </v-card>
          </v-col>
        </v-row>
      </UiCard>
    </v-col>
    <v-col cols="12">
      <UiCard title="table">
        <v-row>
          <v-col>
            <v-card>
              <v-skeleton-loader type="table"></v-skeleton-loader>
            </v-card>
          </v-col>
        </v-row>
      </UiCard>
    </v-col>
    <v-col cols="12">
      <UiCard title="list">
        <v-row>
          <v-col v-for="i in 6" cols="12" sm="6" md="4" lg="2">
            <v-card>
              <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
              <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
              <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
              <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
              <v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader>
            </v-card>
          </v-col>
        </v-row>
      </UiCard>
    </v-col>
    <v-col cols="12">
      <UiCard title="loading">
        <v-row>
          <v-col v-for="i in 6" cols="12" sm="6" md="4" lg="2">
            <v-card v-if="loading" class="mx-auto" max-width="400">
              <v-skeleton-loader type="card-avatar, actions"></v-skeleton-loader>
            </v-card>
            <v-card v-else class="mx-auto" max-width="400">
              <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover>
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                Number 10
              </v-card-subtitle>

              <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange">
                  Share
                </v-btn>

                <v-btn color="orange">
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </UiCard>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
