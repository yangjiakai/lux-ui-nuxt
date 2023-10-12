<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import UiCard from '~/components/common/UiCard.vue';
import Types from '~/components/widgets/skeleton/Types.vue';
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
      <UiCard title="table">
        <v-row>
          <v-col>
            <v-card>
              <v-skeleton-loader type="date-picker"></v-skeleton-loader>
            </v-card>
          </v-col>
        </v-row>
      </UiCard>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
