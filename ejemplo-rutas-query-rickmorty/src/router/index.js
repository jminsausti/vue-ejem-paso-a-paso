import { createRouter, createWebHashHistory } from 'vue-router'
import CharacterListView from '../views/CharacterListView.vue'
import CharacterDetailView from '../views/CharacterDetailView.vue'
import CharacterFilterView from '../views/CharacterFilterView.vue'

const routes = [
  {
    path: '/',
    name: 'characters-list',
    component: CharacterListView
  },
  {
    path: '/character-detail',
    name: 'character-detail',
    component: CharacterDetailView
  },
  {
    path: '/characters-filters',
    name: 'characters-filters',
    component: CharacterFilterView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
