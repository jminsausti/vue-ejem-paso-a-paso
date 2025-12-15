<template>
  <!-- Barra de navegación principal -->
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo y nombre de la tienda -->
      <div class="logo">🛍️ Tienda</div>
      
      <!-- Enlaces de navegación -->
      <ul class="nav-links">
        <!-- Link a la página de productos -->
        <li>
          <RouterLink to="/productos" :class="{ active: $route.path === '/productos' }">
            📦 Productos
          </RouterLink>
        </li>

        <!-- Link al carrito con badge mostrando cantidad de items -->
        <li>
          <RouterLink to="/carrito" :class="{ active: $route.path === '/carrito' }">
            🛒 Carrito
            <!-- Badge (etiqueta) que muestra cantidad de items si hay alguno -->
            <span v-if="carritoStore.totalItems > 0" class="badge">
              {{ carritoStore.totalItems }}
            </span>
          </RouterLink>
        </li>

        <!-- Link al historial de compras -->
        <li>
          <RouterLink to="/historial" :class="{ active: $route.path === '/historial' }">
            📋 Historial
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<!-- Script setup: Composition API -->
<script setup>
// Importar el store de Pinia para acceder a los datos del carrito
import { useCarritoStore } from '../stores/carritoStore'
// Importar useRoute para acceder a la ruta actual
import { useRoute } from 'vue-router'

// Instancia del store de Pinia
const carritoStore = useCarritoStore()
// Hook de Vue Router que nos da info de la ruta actual
const $route = useRoute()
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-links a.active {
  background-color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
}

.badge {
  background-color: #ff6b6b;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}
</style>
