<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const terms = ref(false);
const privacy = ref(false);
const gender = ref("male");
const dob = ref("");
const mobile = ref("");
const customerId = ref("");
const membership = ref("classic");

const submitForm = () => {
  console.log(
    name.value,
    email.value,
    password.value,
    confirmPassword.value,
    terms.value,
    privacy.value
  );
};
</script>

<template>
  <div class="pa-5">
    <div class="flex h-screen bg-gray-100 items-center justify-center">
      <div
        class="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full flex"
      >
        <!-- Left Side -->
        <div class="bg-yellow-400 w-1/3 p-8 flex flex-col justify-between">
          <div class="text-center">
            <div
              class="bg-yellow-300 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center"
            >
              <v-icon size="large" color="grey">mdi-account</v-icon>
            </div>
            <h2 class="text-2xl font-bold mb-2">Let's get you set up</h2>
            <p class="text-sm">
              It should only take a couple of minutes to pair with your watch
            </p>
          </div>
          <div class="mt-8">
            <v-btn icon color="black" class="rounded-full">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>

        <!-- Right Side -->
        <div class="w-2/3 p-8">
          <v-form @submit.prevent="submitForm">
            <v-text-field
              v-model="name"
              label="Name"
              variant="outlined"
              density="compact"
            ></v-text-field>

            <v-radio-group v-model="gender" row class="mt-4">
              <v-radio label="Male" value="male"></v-radio>
              <v-radio label="Female" value="female"></v-radio>
            </v-radio-group>

            <v-text-field
              v-model="dob"
              label="Date of Birth"
              variant="outlined"
              density="compact"
              type="date"
              class="mt-4"
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="Email"
              variant="outlined"
              density="compact"
              type="email"
              class="mt-4"
            ></v-text-field>

            <v-text-field
              v-model="mobile"
              label="Mobile"
              variant="outlined"
              density="compact"
              type="tel"
              class="mt-4"
            ></v-text-field>

            <v-text-field
              v-model="customerId"
              label="Customer ID"
              variant="outlined"
              density="compact"
              class="mt-4"
            ></v-text-field>

            <div class="mt-6">
              <p class="text-sm text-gray-600 mb-2">Membership</p>
              <v-btn-toggle
                v-model="membership"
                color="primary"
                group
                mandatory
              >
                <v-btn value="classic">Classic</v-btn>
                <v-btn value="silver">Silver</v-btn>
                <v-btn value="gold">Gold</v-btn>
              </v-btn-toggle>
            </div>

            <div class="flex justify-end mt-8">
              <v-btn class="mr-4">CANCEL</v-btn>
              <v-btn color="success" type="submit">SAVE</v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
