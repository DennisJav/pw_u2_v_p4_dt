<template>
    <div class="container">
        <h1>Premios</h1>
        <img src="https://static.vecteezy.com/system/resources/previews/009/315/016/original/winner-trophy-in-flat-style-free-png.png"
            alt="img error">
    </div >

    <div class="premioslist">
        <h1>5 pts: Pikachu</h1>
        <h1>2 pts: Squirtle</h1>
        <h1>1 pts: sigue intentando</h1>
    </div>
    



</template>
  

<script>
export default {

//    computed:{
//         recibido(){
//             return this.$route.params.premio
//         },
//    },
}
</script>
  
<style scoped>
.container {
    text-align: center;
    padding: 5px;
}

.container h1 {
    color: aliceblue;
    text-shadow: black 0.1em 0.1em 0.2em
}

.container img {
    height: 200px;
    filter: drop-shadow(-2px 2px 25px rgba(0, 0, 0, 0.7));
}

.premioslist{
    color: aliceblue;
    text-align: center;
    text-shadow: black 0.1em 0.1em 0.2em
}


</style>