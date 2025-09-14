<template>
  <v-app>
    <v-main>
      <!-- Full-width container without extra padding -->
      <v-container fluid class="pa-0">
        <v-row no-gutters>
          <!-- Left: Login Card -->
          <v-col cols="12" md="6" class="d-flex justify-start">
            <v-card class="ma-12 pa-12 pb-8" elevation="24" max-width="700" rounded="lg" width="600">
              <!-- Logo -->
              <v-img class="mx-auto my-0" max-width="120" src="file.svg" />

              <!-- Account Label -->
              <div class="text-subtitle-1 text-medium-emphasis mt-4">
                Account
              </div>

              <!-- Email Field -->
              <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                variant="outlined" />

              <!-- Password Field -->
              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between mt-2">
                Password
                <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                  target="_blank">
                  Forgot login password?
                </a>
              </div>

              <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible" />

              <!-- Login Button -->
              <v-btn class="mb-8 mt-4" color="blue" size="large" variant="tonal" block>
                Log In
              </v-btn>

              <!-- Sign Up -->
              <v-card-text class="text-center">
                <router-link to="/signup" class="text-blue text-decoration-none">
                  Sign up now
                  <v-icon icon="mdi-chevron-right" />
                </router-link>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Right: Animated Image -->
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <v-slide-x-transition>
              <v-img src="avenger.png" alt="Superman" width="900" height="500" cover />
            </v-slide-x-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
