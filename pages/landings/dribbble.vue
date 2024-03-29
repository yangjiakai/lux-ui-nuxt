<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <div class="h-full bg-white">
    <!-- App Bar -->
    <v-toolbar color="transparent">
      <v-btn active class="text-none" stacked> Home </v-btn>
      <v-btn class="text-none" stacked> Products </v-btn>
      <v-btn class="text-none" stacked> Services </v-btn>
      <v-btn class="text-none" stacked> Contact </v-btn>
      <v-btn class="text-none" stacked> About </v-btn>

      <div class="ml-5 mr-5 flex-grow-1">
        <h3 class="text-h5 font-weight-bold">Vuetify</h3>
      </div>

      <v-btn class="text-none"> En </v-btn>
    </v-toolbar>

    <!-- App Bar -->

    <!-- Search -->

    <!-- Filter -->

    <!-- List -->
    <div class="pa-5">
      <v-row align="center">
        <v-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="i in 30">
          <v-card
            variant="flat"
            class="mx-auto"
            color="transparent"
            max-width="600"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-img
                v-bind="props"
                :aspect-ratio="16 / 9"
                src="https://cdn.dribbble.com/users/1615584/screenshots/17578107/media/55cd7c269f8c140c2f19281e30e8abb3.jpg?resize=640x480&vertical=center"
                cover
                class="rounded-lg"
              >
                <v-fade-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%"
                  >
                    <div
                      class="d-flex align-center flex-grow-1 text-white pa-5"
                    >
                      <span class="font-weight-bold">UI Component</span>
                      <v-spacer></v-spacer>
                      <v-btn
                        density="comfortable"
                        icon="mdi-bookmark-outline"
                        class="mr-2"
                        size="small"
                      ></v-btn>
                      <v-btn
                        density="comfortable"
                        color="error"
                        icon="mdi-heart"
                        size="small"
                      ></v-btn>
                    </div>
                  </div>
                </v-fade-transition>
              </v-img>
            </v-hover>

            <div class="d-flex align-center text-body-2 my-2">
              <v-avatar size="30">
                <v-img
                  lazy-src="https://cdn.dribbble.com/users/1047455/avatars/small/fd251b6a71360896bee0e87d11d7868f.png?1505553932"
                  src="https://cdn.dribbble.com/users/1047455/avatars/small/fd251b6a71360896bee0e87d11d7868f.png?1505553932"
                ></v-img>
              </v-avatar>
              <span class="mx-2 font-weight-bold">Paperpilllar</span>
              <v-chip size="small" label density="compact" color="primary"
                >TEAM</v-chip
              >
              <v-spacer></v-spacer>
              <div class="mr-2">
                <v-icon color="error">mdi-heart</v-icon>
                585
              </div>
              <div>
                <v-icon color="grey">mdi-eye</v-icon>
                129k
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-card--reveal {
  align-items: end;
  bottom: 0;
  justify-content: space-around;
  opacity: 0.9;
  position: absolute;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)
  );
}
</style>
