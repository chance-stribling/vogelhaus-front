<template>
    <div>
      <h1>This is the create page</h1>
      <v-btn @click="add()" >Create Haus</v-btn>
    </div>
  </template>

  <script>
  import axios from 'axios'

  export default {
    data: () => ({
      hauses: [],
      article: {
        id: 0,
        name: "The Cave",
        address: "601 East Unaka"
      },
      errorMessage: ""
    }),
    methods:{
        add(){
            axios.post("http://localhost:8080/haus", this.article)
            .then((response) => {
                console.log(response);
            })
        }
    }
  }
</script>
  