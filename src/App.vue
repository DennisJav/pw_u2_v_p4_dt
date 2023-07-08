<template>
  <PokemonPage/>
  
</template>


<script>
import PokemonPage from "./modules/pokemon/pages/PokemonPage.vue";

export default {
  name: "App",
  components: {
    PokemonPage,
    
  },
};
</script>

<style>
#app {

    text-align: center;
}
</style>
