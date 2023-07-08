import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        component: ()=> import('../modules/pokemon/pages/BienvenidaPage')
    },
    {
        path: "/juego",
        component: ()=> import('../modules/pokemon/pages/PokemonPage')
    },
    {
        path: "/premios",
        component: ()=> import('../modules/pokemon/pages/PremiosPage')
    },
    {
        path: "/prueba",
        component:  ()=>import('../modules/pokemon/pages/PruebaPage')
    },
    {
        path: "/:pathMatch(.*)*",
        component:  ()=>import('../modules/pokemon/pages/NoEncontradoPage')
    }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router