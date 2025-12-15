// Importar las funciones necesarias de Vue Router
import { createRouter, createWebHistory } from 'vue-router'
// Importar la tienda de Pinia
import { useCarritoStore } from '../stores/carritoStore'
// Importar las vistas de la aplicación
import ProductosView from '../views/ProductosView.vue'
import CarritoView from '../views/CarritoView.vue'
import HistorialView from '../views/HistorialView.vue'

/**
 * Array de rutas de la aplicación
 * Cada ruta define:
 * - path: la URL que se mostrará en la barra del navegador
 * - name: identificador único de la ruta (opcional pero recomendado)
 * - component: el componente Vue que se renderizará
 */
const routes = [
  {
    path: '/',
    // Redirige la raíz a /productos
    redirect: '/productos'
  },
  {
    // Ruta para la página de productos
    path: '/productos',
    name: 'Productos',
    component: ProductosView
  },
  {
    // Ruta para la página del carrito
    path: '/carrito',
    name: 'Carrito',
    component: CarritoView
  },
  {
    // Ruta para la página del historial de compras
    path: '/historial',
    name: 'Historial',
    component: HistorialView
  }
]

/**
 * Crear la instancia del router
 * - history: tipo de historial (createWebHistory usa el historial del navegador)
 * - routes: array de rutas definidas arriba
 */
const router = createRouter({
  history: createWebHistory(),
  routes
})

/**
 * ROUTE GUARDS - Proteger rutas basándose en el estado de la tienda
 * Estos guards validan si se puede acceder a cierta ruta antes de que se cargue
 */

// Guard global: se ejecuta antes de cada navegación
router.beforeEach((to, from, next) => {
  // Obtener acceso a la tienda Pinia
  const store = useCarritoStore()

  // Guard para ruta /carrito: verificar que haya productos agregados
  if (to.path === '/carrito') {
    if (store.carrito.length === 0) {
      console.warn('⚠️ El carrito está vacío. Redirigiendo a productos...')
      // Si el carrito está vacío, redirigir a productos
      next('/productos')
    } else {
      // Si hay productos, permitir acceso
      next()
    }
  }
  // Guard para ruta /historial: verificar que haya compras realizadas
  else if (to.path === '/historial') {
    if (store.historial.length === 0) {
      console.warn('⚠️ No hay compras en el historial. Redirigiendo a productos...')
      // Si no hay historial, redirigir a productos
      next('/productos')
    } else {
      // Si hay historial, permitir acceso
      next()
    }
  }
  // Para todas las otras rutas, permitir acceso
  else {
    next()
  }
})

// Exportar el router para usarlo en main.js
export default router
