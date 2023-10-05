<script setup lang="ts">


definePageMeta({
  layout: "blank",
});
</script>
<template>
  <div class="pa-3">
    <v-row class="h-100vh mh-100 auth">
      <v-col cols="12" lg="7" xl="8" class="d-lg-flex align-center justify-center authentication position-relative">
        <div class="auth-header pt-lg-6 pt-2 px-sm-6 px-3 pb-lg-6 pb-0">
          <div class="position-relative">
            <LcFullLogoDark />
          </div>
        </div>
        <div class="">
          <img src="/images/backgrounds/login-bg.svg" height="450" class="position-relative d-none d-lg-flex"
            alt="login-background" />
        </div>
      </v-col>
      <v-col cols="12" lg="5" xl="4" class="d-flex align-center justify-center bg-surface">
        <div class="mt-xl-0 mt-5 mw-100">
          <h2 class="text-h3 font-weight-bold mb-2">Welcome to AdminPro</h2>
          <div class="text-subtitle-1 mb-6">Your Admin Dashboard</div>
          <AuthLoginForm />
          <h6 class="text-h6 d-flex align-center mt-6 font-weight-medium">
            New to AdminPro?
            <v-btn class="pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium" height="auto"
              to="/auth/register" variant="plain">Create an account</v-btn>
          </h6>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
