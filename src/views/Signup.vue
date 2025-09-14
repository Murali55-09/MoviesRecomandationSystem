<template>
  <v-app>
    <v-main>
        <v-img
        src="https://wallpapercave.com/wp/wp1945898.jpg"
        class="fill-height"
        cover
      >
      <v-container fluid class="pa-0">
        <v-row no-gutters>
          <!-- Left: Sign-Up Card -->
          <v-col cols="12" md="6" class="d-flex justify-start">
            <v-card
              class="ma-12 pa-12 pb-8"
              elevation="8"
              max-width="700"
              rounded="lg"
              width="600"
            >
              <!-- Logo -->
              <v-img
                class="mx-auto my-0"
                max-width="120"
                src="file.svg"
              />

              <!-- Sign-Up Label -->
              <div class="text-h6 text-center mt-4">Create Your Account</div>

              <!-- Name Field -->
              <v-text-field
                density="compact"
                placeholder="Full Name"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                class="mt-4"
              />

              <!-- Email Field -->
              <v-text-field
                density="compact"
                placeholder="Email Address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                class="mt-2"
              />

              <!-- Password Field -->
              <v-text-field
                :append-inner-icon="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="passwordVisible ? 'text' : 'password'"
                density="compact"
                placeholder="Enter Password"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                class="mt-2"
                @click:append-inner="passwordVisible = !passwordVisible"
              />

              <!-- Confirm Password Field -->
              <v-text-field
                :append-inner-icon="confirmPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="confirmPasswordVisible ? 'text' : 'password'"
                density="compact"
                placeholder="Confirm Password"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                class="mt-2"
                @click:append-inner="confirmPasswordVisible = !confirmPasswordVisible"
              />

              <!-- Sign Up Button -->
              <v-btn
                class="mt-6 mb-4"
                color="green"
                size="large"
                variant="tonal"
                block
              >
                Sign Up
              </v-btn>

              <!-- Already have account -->
              <v-card-text class="text-center">
                <span>Already have an account? </span>
                <router-link to="/home" class="text-blue text-decoration-none">
                  Log In <v-icon icon="mdi-chevron-right"/>
                </router-link>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Right: Animated Image -->
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <v-slide-x-transition>
             
            </v-slide-x-transition>
          </v-col>
        </v-row>
      </v-container>
      </v-img>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const passwordVisible = ref(false);
const confirmPasswordVisible = ref(false);
</script>
