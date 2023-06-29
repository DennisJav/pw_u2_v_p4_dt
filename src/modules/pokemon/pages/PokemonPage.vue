<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="566" :showPokemon="false" />
  <PokemonOps />
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/pokemonOps.vue";

export default {
  components: {
    PokemonImg,
    PokemonOps,
  },
};
</script>

<style>

</style>