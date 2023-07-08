<template>
  <div class="container">
    <div v-if="juegoActivo">

      <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>

      <div v-else>
        <h1>Quien es ese pokemon!!</h1>

        <Image :pokemon-id="pokemonCorrecto.id" :muestraPokemon="showPokemon"> </Image>
        <Option :opciones="arregloPokemon" v-on:seleccionado="revisarSeleccion($event)"></Option>


        <div class="puntajes">
          <p>Puntaje: {{ puntaje }}</p>
          <p>Intentos: {{ intentos }}</p>
        </div>

        <div>
          <button v-if="mostrarSiguiente" @click="reiniciar">Reiniciar</button>
        </div>

      </div>

    </div>

    <div v-if="ganador">
      <h2>Has Ganado!!!</h2>
    </div>

    <div v-if="perdedor">
      <h2>Has perdido</h2>
    </div>
  </div>
</template>

<script>
import Image from "../components/PokemonImg.vue";
import Option from "../components/pokemonOps.vue";


import obtenenerFachadaPokemon from "../helpers/clientePokemonAPI"

console.log(obtenenerFachadaPokemon());

export default {


  props: {
    premioCompartir: {
      type: Array,
      required: false
    }
  },

  data() {
    return {
      arregloPokemon: [],
      pokemonCorrecto: null,
      showPokemon: false,
      //tarea
      puntaje: 0,
      intentos: 0,
      mostrarSiguiente: false,
      ganador: false,
      perdedor: false,
      juegoActivo: true,
      premio: [],
    }
  },
  components: {
    Image,
    Option,
  },
  mounted() {
    this.cargaJuegoInicial()
   // const prem = this.puntaje
   // this.$router.push({path: `/premios/${prem}`})
  },


  methods: {
    async cargaJuegoInicial() {
      const arreglosPokemon = await obtenenerFachadaPokemon()
      console.log(this.arregloPokemon);
      this.arregloPokemon = arreglosPokemon
      const indicePokemon = Math.floor(Math.random() * 4)
      this.pokemonCorrecto = this.arregloPokemon[indicePokemon]
      this.showPokemon = false
      this.ganador = false
      this.mostrarSiguiente = false
      this.puntaje=0
    },
    revisarSeleccion(idSeleccionado) {

      if (this.intentos == 2) {
        this.perdedor = true
        this.mostrarSiguiente = true
      } else {

        if (this.pokemonCorrecto.id == idSeleccionado) {
          if (this.intentos == 0) {
            this.puntaje = this.puntaje + 5
            this.showPokemon = true
            this.mostrarSiguiente = true
            this.juegoGanado()
          } else if (this.intentos == 1) {
            this.puntaje = this.puntaje + 2
            this.showPokemon = true
            this.mostrarSiguiente = true
            this.juegoGanado()

          } else if (this.intentos == 2) {
            this.puntaje = this.puntaje + 1
            this.showPokemon = true
            this.mostrarSiguiente = true
            this.juegoGanado()
          }

        } else {

          this.intentos = this.intentos + 1

        }
      }

    },
    reiniciar() {
      this.puntaje = 0
      this.intentos = 0
      this.ganador = false
      this.perdedor = false
      this.juegoActivo = true
      this.pokemonCorrecto = null
      this.cargaJuegoInicial()
    },

    juegoGanado() {
      this.ganador = true
      this.premioCompartir = this.cargarPremio()
      this.cargarPremio()
    },

    cargarPremio() {

      if (this.ganador) {
        this.premio.push(this.puntaje)
        console.log("--------------------------------------------------------");
        console.log(this.premio);
      }
      return this.premio
    },

 


  },
};
</script>

<style scoped>
h1,
h2,
.container {
  text-align: center;
  color: aliceblue;
  text-shadow: black 0.1em 0.1em 0.2em;
  padding: 5px;
}

.puntajes p {
  display: inline;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif
}

.boton {
  text-align: center;
}

button {
  border-radius: 5px;
  font-size: 15px;
  background-color: aliceblue;
  padding: 5px;
  margin-top: 10px;
}
</style>
