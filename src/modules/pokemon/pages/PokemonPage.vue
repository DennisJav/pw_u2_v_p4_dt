<template>
  <h1 v-if="!pokemonCorrecto">Espere porfavor....</h1>
  <div v-else>
    <h1>Juego Pokemon</h1>
    <PokemonImg :pokemonId="pokemonCorrecto.id" :showPokemon="revisarPokemon" />
    <PokemonOps
      :opciones="arregloPok"
      @seleccionado="revisarSeleccion($event)"
    />
  </div>
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
      pokemonCorrecto: null,
      revisarPokemon: false,
    };
  },

  methods: {
    async cargaJuegoInicial() {
      const arregloPok = await obtenerFachadaPokemons();
      // console.log(arregloPokemons);
      this.PokemonImg = this.arregloPok;
      const indicePokemon = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.PokemonImg[indicePokemon];
      //return this.arregloPok
    },
    revisarPokemon(indicePokemon) {
      this.showPokemon = false;
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