<template>
  <div class="contendor-img">
    <img
      class="oculta-pokemon"
      :src="imagenFound"
      alt="No se puede mostrar imagen"
    />
    <img
      v-if="showPokemon"
      :src="imagenFound"
      alt="No se puede mostrar imagen"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    imagenFound() {
      //     return (
      //      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
      //       this.pokemonId +
      //       ".svg"
      //     );
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
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
.contendor-img {
  display: flex;
  justify-content: center;
  height: 200px;
}
</style>