<template>
  <v-container>
    <h1 class="mb-5">🎯 Your Recommendations</h1>
    <v-row>
      <v-col cols="12" md="3" v-for="n in 6" :key="n">
        <MovieCard :title="'Recommended ' + n" :rating="4.2" :year="2024"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  components: { MovieCard }
};
</script>
