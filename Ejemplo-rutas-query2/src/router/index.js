import { createRouter, createWebHashHistory } from 'vue-router'
import PokemonListView from '../views/PokemonListView.vue'
import PokemonDetailView from '../views/PokemonDetailView.vue'
import PokemonFilterView from '../views/PokemonFilterView.vue'

const routes = [
  {
    path: '/',
    name: 'pokemons-list',
    component: PokemonListView
  },
  {
    // Vista de detalle: obtendremos el pokemon por query (?name=...)
    path: '/pokemon-detalle',
    name: 'pokemon-detail',
    component: PokemonDetailView
  },
  {
    // Vista de filtros: el filtro se controla por query (?filter=...)
    path: '/pokemon-filtros',
    name: 'pokemon-filters',
    component: PokemonFilterView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
