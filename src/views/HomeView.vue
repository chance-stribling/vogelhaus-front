<script>
  import axios from 'axios'

  export default {
    data: () => ({
      hauses: [],
    }),
    mounted () {
    axios
      .get('http://localhost:8080/hauses')
      .then(response => (this.hauses = response.data))
  }
  }
</script>

<template>
  <h1>Hauses</h1>
  <v-card v-for="haus in hauses" width="300px" height="100px" color="blue">
    <v-card-title>{{ haus.name }}</v-card-title>
    <v-card-subtitle>{{ haus.address }}</v-card-subtitle>
  </v-card>
</template>
