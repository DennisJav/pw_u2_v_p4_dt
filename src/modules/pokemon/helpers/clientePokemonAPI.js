const obtenerpokemon= async()=>{
  //Retornar el Array de Pokemones
  console.log('Aleatorio')
  const vectorObj=await obtenerPokemonNombres(obtenerVectorNumerico())
  console.log(vectorObj)
  return vectorObj;
} 

function getNumneroAleatorio(min , max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const obtenerVectorNumerico=()=>{
  const vector=[getNumneroAleatorio(1,649)
      ,getNumneroAleatorio(1,649)
      ,getNumneroAleatorio(1,649)
      ,getNumneroAleatorio(1,649)]
  return vector;
}

  //a partir de un arreglo, se esta desestructurando
const obtenerPokemonNombres=async([id1,id2,id3,id4]=[])=>{
  const data1=await consumirApi(id1)
  const data2=await consumirApi(id2)
  const data3=await consumirApi(id3)
  const data4=await consumirApi(id4)
  console.log(data1.name,data2.name,data3.name,data4.name);
  const obj1={
      nombre:data1.name,
      id: data1.id
  }
  const obj2={
      nombre:data2.name,
      id: data2.id
  }
  const obj3={
      nombre:data3.name,
      id: data3.id
  }
  const obj4={
      nombre:data4.name,
      id: data4.id
  }
  const vectorObjetos=[obj1,obj2,obj3,obj4]
  return vectorObjetos
}

const consumirApi=async(id)=>{
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=>r.json())
  const {name}=data
  console.log(data.name);
  return data
}

const obtenerFachadaPokemon=async()=>{
  return await obtenerpokemon();
}

export default obtenerFachadaPokemon