<template>
  <!-- <PokemonPage /> -->
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
//import PokemonPage from "./modules/pokemon/pages/PokemonPage.vue";
import NavBar from './modules/pokemon/components/NavBar.vue';
export default {
  name: "App",
  components: {
    // PokemonPage,
    NavBar

  },
};
</script>

<style>
#app {

  text-align: center;
}
</style>
