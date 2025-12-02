// Definición del router de la aplicación
import { createRouter, createWebHashHistory } from 'vue-router'

// Vistas que usaremos en las rutas
import HomeView from '../views/HomeView.vue'
import ListaView from '../views/ListaView.vue'

// Array de rutas de la app
const routes = [
  {
    // Ruta de inicio
    path: '/',
    // Nombre que usaremos en RouterLink y router.push
    name: 'home',
    component: HomeView
  },
  {
    // Ruta donde mostraremos la lista filtrada por query
    path: '/lista',
    name: 'lista',
    component: ListaView
  }
]

// Creamos la instancia de router
const router = createRouter({
  // Usamos hash (#) en la URL para no depender de configuración de servidor
  history: createWebHashHistory(),
  routes
})

export default router
