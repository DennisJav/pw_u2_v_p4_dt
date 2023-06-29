<template>
  <h1>Pokemon options</h1>
  <div class="contenedor-opc">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
ul {
  list-style-type: none;
}

li {
  font-size: 25px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  width: 200px;
  cursor: pointer;
}

li:hover {
  background-color: rgb(17, 128, 91);
}

.contenedor-opc{
  display: flex;
  justify-content: center;
}
</style>