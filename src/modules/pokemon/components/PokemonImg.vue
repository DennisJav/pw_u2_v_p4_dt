<template>
  <div class="contenedor-imagen">
    <img class="oculta-pokemon" :src="imagenFuente" alt="no se puede mostrar" />
    <img v-if="muestraPokemon" :src="imagenFuente" alt="no se puede mostrar" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    muestraPokemon:{
      type: Boolean,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    imagenFuente() {
      console.log("se imprimio");
      return (
        // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        // this.pokemonId +
        // ".svg"
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
      );
      
    },
  },
};
</script>

<style scoped>
.oculta-pokemon {
  filter: brightness(0);
}

img {
  position: absolute;
  height: 200px;
  
}
.contenedor-imagen {
  height: 250px;
  display: flex;
  justify-content: center;
}
</style>
