<script setup>
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue';
</script>

<template>
 
  <v-app id="app">
    <TopBar/>
    <v-container fluid>
      <v-main>
        <RouterView />
      </v-main>
    </v-container>
  </v-app>
</template>

<style scoped>

</style>
