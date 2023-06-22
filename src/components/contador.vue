<template>
  <h1>{{ evaluarTitulo }}</h1>
  <h2>{{ valordosComponente }}</h2>
  <p>{{ numero }}<sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }}<sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }}<sup>2</sup>={{ obtenerCuadradoComputado }}</p>

  <button @click="acomular()">+</button>
  <button @click="disminuir()">-</button>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      numero: this.inicio,
      resu: 0,
      tituloComponente: this.titulo,
      valordosComponente: this.valordos,
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

    evaluarTitulo() {
      return this.tituloComponente || "Valor por defecto";
    },
  },

  //props: ["titulo", "valordos", "inicio"],
  props: {
    titulo: String,
    inicio: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        return value > 100;
      },
    },
  },
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