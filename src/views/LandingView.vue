<template>
    <div class="text-center mt-15">
      <h1> Welcome Home </h1>
      <v-btn
        color="primary"
        @click="dialog = true"
        class="mt-15"
        >
        Login
        </v-btn>

        <v-dialog
        v-model="dialog"
        width="300"
        height="460"
        class="text-center"
        >
        <v-card class="pt-10 px-10 justify-center mx-auto">
            <v-form @submit.prevent>
                <h3>{{ pin }}</h3>
                <v-row>
                    <v-col v-for="i in 9">
                        <div class="numpad text-h3" @click="punch(i)">{{ i }}</div>
                    </v-col>
                    
                </v-row>
                <v-row>
                    <v-col>
                    </v-col>
                    <v-col>
                        <div class="numpad text-h3" @click="punch(0)">0</div>
                    </v-col>
                    <v-col>
                    </v-col>
                </v-row>
                <v-btn type="submit" @click="login()" class="mt-5">Enter</v-btn>
                <v-btn @click="reset()" class="mt-5">Reset</v-btn>

            </v-form>
            <v-card-actions>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
  </template>

<style scoped>
    .numpad{
        background-color: aqua;
        height: 50px;
        width: 50px;
        cursor: pointer;
    }
</style>

<script>
  export default {
    data () {
      return {
        dialog: false,
        pin: "",
      }
    },
    methods:{
        login: function(){
            if (this.pin=="0531"){
                this.$router.push('/hauses');
            }
            else{
                alert("Wrong pin, baby");
                this.dialog=false;
            }
        },
        punch: function(x){
            this.pin=this.pin + x;
            console.log(this.pin);
        },
        reset: function(){
            this.pin="";
        }
    }
  }
</script>