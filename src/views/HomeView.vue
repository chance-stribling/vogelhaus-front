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
  <h1 style="text-align: center;">Hauses</h1>
  <div style="margin-top: 30px; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-evenly;">

    <v-card @click="$router.push('/haus/' + haus.id)"  v-for="haus in hauses" width="200px" height="100px" color="blue" class="my-5">
      <v-card-title>{{ haus.name }}</v-card-title>
      <v-card-subtitle>{{ haus.address }}</v-card-subtitle>
    </v-card>
  </div>
</template>
