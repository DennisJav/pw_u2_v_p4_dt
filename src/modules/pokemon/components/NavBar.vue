<template>
  <div class="container">
    <div>
      <router-link to="/">Bienvenida</router-link>
      <router-link to="/juego">Juego</router-link>
      <router-link to="/premios"  >Premios</router-link>
      <router-link to="/pokemon">Pokemon</router-link>
    </div>
  </div>
</template>
  
<script>

export default {

}
</script>
  
<style scoped>
.container {
  text-align: center;
  margin-top: 25px;
}

a{
  text-decoration: none;
  background-color: rgb(243, 234, 113);
  border-radius: 5px;
  padding: 5px;

}

div {
  padding: 0 30px;
  align-items: center;
}

div a {
  font-weight: bold;
  color: black;
  margin: 0 10px;
  font-size: 25px;
}


</style>