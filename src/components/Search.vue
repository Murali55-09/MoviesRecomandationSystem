<template>
  <v-container>
    <h1>🔍 Search Movies</h1>
    <v-text-field v-model="query" label="Search for a movie..." outlined clearable></v-text-field>
    <v-btn color="red darken-2" @click="searchMovies">Search</v-btn>

    <v-row class="mt-5">
      <v-col cols="12" md="3" v-for="movie in results" :key="movie.id">
        <MovieCard :title="movie.title" :rating="movie.rating" :year="movie.year"/>
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
      query: "",
      results: []
    };
  },
  methods: {
    searchMovies() {
      // Dummy results
      this.results = [
        { id: 1, title: "Inception", rating: 4.7, year: 2010 },
        { id: 2, title: "Interstellar", rating: 4.8, year: 2014 }
      ];
    }
  }
};
</script>
