<template>
  <v-container>
    <h1> Your Profile</h1>
    <v-card class="pa-5" outlined>
      <v-avatar size="100" class="mb-3">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User">
      </v-avatar>
      <h2>{{ user.name }}</h2>
      <p>Preferred Genres: {{ user.genres.join(", ") }}</p>
      <v-btn color="red darken-2" class="mt-3">Edit Preferences</v-btn>
    </v-card>

    <h2 class="mt-8"> Favorites</h2>
    <v-row>
      <v-col cols="12" md="3" v-for="n in 3" :key="n">
        <MovieCard :title="'Favorite ' + n" :rating="4.6" :year="2023"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  components: { MovieCard },
  data() {
    return {
      user: {
        name: "Murali",
        genres: ["Action", "Sci-Fi", "Drama"]
      }
    };
  }
};
</script>
