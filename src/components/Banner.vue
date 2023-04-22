<template>
  <div id="background" class="h-64 bg-center">
    <div class="flex justify-center">
      <div class="grid grid-cols-5 text-white w-1160">
        <div class="mt-12 ml-2.5">
          <img :src="country1" class="rounded-full h-44 w-44">
        </div>
        <div class="text-center mt-28">
          <h1 class="text-4xl"> {{ this.player1 }} </h1>
        </div>
        <div class="text-center mt-7 text-lg"> {{ this.matchName }} </div>
        <div class="text-center mt-28">
          <h1 class="text-4xl"> {{ this.player2 }} </h1>
        </div>
        <div class="mt-12 ml-11">
          <img :src="country2" class="rounded-full h-44 w-44">
        </div>
      </div>
    </div>
  </div>
  <Form class="mt-40" @insertPlayer1="updatePlayer1" @insertPlayer2="updatePlayer2" @insertMatchName="updateMatchName"/>
</template>

<script>
import Form from './Form.vue';

  export default {
    components: {
      Form
    },
    data(){
      return {
        player1 : null,
        player2 : null,
        matchName: null,
        country1: 'italia',
        country2: 'portugal'
      }
    },
    computed: {
      country1() {
        return `src/assets/${ this.country1 }.jpg`;
      },
      country2() {
        // return `src/assets/italia.jpg`;
        return `src/assets/${ this.country2 }.jpg`;
      }
    },
    methods: {
      updatePlayer1(player1){
        this.player1 = player1
      },
      updatePlayer2(player2){
        this.player2 = player2
      },
      updateMatchName(match){
        this.matchName = match
      },
    }
  }
</script>
