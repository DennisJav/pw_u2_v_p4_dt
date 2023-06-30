<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="23" :showPokemon="false" />
  <PokemonOps :opciones="arregloPok" />
</template>

<script>

import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/pokemonOps.vue";
import obtenerFachadaPokemons from "../helpers/clientePokemonAPI.js";
//console.log(obtenerFachadaPokemons());
export default {
  components: {
    PokemonImg,
    PokemonOps,
  },

  data() {
    return {
      arregloPok: [],
    }
  },


  methods: {
    async cargaJuegoInicial() {
      this.arregloPok = await obtenerFachadaPokemons();
      // console.log(arregloPokemons);
      return this.arregloPok
    },
  },

  //los metodos de ciclos de vida no hace falta llamar con await
  mounted() {
    console.log("monto el componente");
    this.cargaJuegoInicial();
  },
};
</script>

<style></style>