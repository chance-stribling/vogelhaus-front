<template>
  <v-sheet color="grey" width="800" height="450" class="mx-auto text-center pa-10">

      <h1>This is the create page</h1>
      <v-form @submit.prevent>
        <v-text-field
        v-model="haus.name"
          :rules="rules"
          label="Haus Name"
        ></v-text-field>
        <v-text-field
        v-model="haus.address"
          :rules="rules2"
          label="Haus Address"
        ></v-text-field>
        <v-btn type="submit" class="my-10" @submit="add()" >Create Haus</v-btn>
      </v-form>
  </v-sheet>
  </template>

  <script>
  import axios from 'axios'

  export default {
    data: () => ({
      haus: {
        name: "",
        address: ""
      },
      rules: [
        value => {
          if (value) return true

          return 'You must enter a haus name.'
        },
      ],
      rules2: [
        value => {
          if (value) return true

          return 'You must enter a address.'
        },
      ],
    }),
    methods:{
        add(){
            axios.post("http://localhost:8080/haus", this.haus)
            .then((response) => {
                console.log(response);
            })
        }
    }
  }
</script>
  