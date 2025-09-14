<template>
  <v-card>
    <v-img src="https://via.placeholder.com/300x450" height="300px"></v-img>
    <v-card-title>{{ title }} ({{ year }})</v-card-title>
    <v-card-subtitle>⭐ {{ rating }}</v-card-subtitle>
    <v-card-actions>
      <v-btn text color="red darken-2">More Info</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    title: String,
    year: Number,
    rating: Number
  }
};
</script>
