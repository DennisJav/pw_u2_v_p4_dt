<template>
  <h1>{{ tituloComponente }}</h1>

  <p>{{ numero }}<sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }}<sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }}<sup>2</sup>={{ obtenerCuadradoComputado }}</p>

  <button v-on:click="acomular()">+</button>
  <button v-on:click="disminuir()">-</button>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      numero: 0,
      resu: 0,
      tituloComponente: this.titulo,
    };
  },

  methods: {
    acomular() {
      this.numero++;
    },
    disminuir() {
      this.numero--;
    },
  },

  computed: {
    obtenerCuadradoComputado() {
      console.log("Entro al metodo cuadrado computado");
      return this.numero * this.numero;
    },
  },

  props: ["titulo", "valor dos"],
};
</script>

<style>
button {
  background-color: #64b687;
  border-radius: 10px;
  border: 1px solid white;
  margin: 0 5px;
  font-size: 25px;
  padding: 5px 15px;
  cursor: pointer;
}

button:hover {
  background-color: #5aa67b;
}
</style>