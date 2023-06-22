<template>
  <h1>Caracola Mágica</h1>
  <img
    src="https://i1.sndcdn.com/artworks-000465695355-44p865-t500x500.jpg"
    alt="Not Found"
  />

  <input type="text" placeholder="Hazme una pregunta" v-model="pregunta" />
  <p>Recuerda terminar presionando enter para responder tu pregunta</p>

  <div>
    <h2>Voy a pasar de año?</h2>
    <h1>Si, No</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "Hola mundo",
    };
  },
};
</script>

<style>
</style>