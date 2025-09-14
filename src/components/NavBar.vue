<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-icon class="mr-2">fas fa-film</v-icon> Movie Recommender
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn to="/" text>
      <v-icon class="mr-1">fas fa-home</v-icon> Home
    </v-btn>
    <v-btn to="/recommendations" text>
      <v-icon class="mr-1">fas fa-star</v-icon> Recommendations
    </v-btn>
    <v-btn to="/search" text>
      <v-icon class="mr-1">fas fa-search</v-icon> Search
    </v-btn>
    <v-btn to="/profile" text>
      <v-icon class="mr-1">fas fa-user</v-icon> Profile
    </v-btn>
  </v-app-bar>
</template>
