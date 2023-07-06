<template>
  <div class="container">
    <ul>

        <li v-for="pokemon in opciones" :key="pokemon.id" @click="$emit('seleccionado',pokemon.id)">{{pokemon.nombre}}</li>

    </ul>
  </div>
</template>

<script>
export default {
  props:{
    opciones:{
      type: Array,
      required: true
    }
  },
  methods:{
    pruebaDeEvento(){
     // console.log('probando evento')
    }
  },

};

</script>

<style>
.container {
    display: grid;
    justify-content: center;
    margin-right: 60px;
}

ul {
  list-style-type: none;
}

li {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgb(153, 149, 149);
  margin-bottom: 10px;
  width: 200px;
  cursor: pointer;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
}

li:hover {
  background-color: rgb(4, 121, 33);
}
</style>
