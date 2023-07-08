<template>
  <!-- <PokemonPage /> -->

  <img src="https://www.lavanguardia.com/andro4all/hero/2019/02/Fondos-de-pantalla-de-Pokemon.jpg?width=1200&aspect_ratio=16:9" alt="Error load img">

  <div class="bg-dark"></div>
  <div class="contenedor">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
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

<style scoped>
#app {

  text-align: center;
}

img,
.bg-dark {
  height: 100vh;
  width: 100vw;
  left: 0px;
  max-width: 100%;
  max-height: 100%;
  position: fixed;
  top: 0%;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.2);

}

.contenedor {
  position: relative;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.2);

}
</style>
