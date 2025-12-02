import { createRouter, createWebHistory } from 'vue-router'
import PaginationView from '../views/PaginationView.vue'
import FiltersView from '../views/FiltersView.vue'
import SearchView from '../views/SearchView.vue'

const routes = [
  {
    path: '/',
    redirect: '/pagination'
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: PaginationView
  },
  {
    path: '/filters',
    name: 'filters',
    component: FiltersView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
