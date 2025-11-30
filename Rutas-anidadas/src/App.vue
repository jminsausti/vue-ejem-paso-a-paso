<script setup>
/**
 * App.vue - Componente raíz de la aplicación
 * 
 * - Importa RouterLink y RouterView de vue-router
 * - RouterLink: componente para crear enlaces de navegación
 * - RouterView: contenedor donde se renderizan las vistas según la ruta activa
 */
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <!-- Cabecera con navegación principal -->
    <header class="header">
      <h1 class="title">🔗 Rutas Anidadas en Vue Router</h1>
      <p class="subtitle">Ejemplo de navegación con rutas padre e hijas</p>
      
      <!-- Navegación principal -->
      <nav class="nav-main">
        <!-- RouterLink genera un <a> con funcionalidad de SPA -->
        <RouterLink class="nav-link" to="/">🏠 Inicio</RouterLink>
        <RouterLink class="nav-link" to="/dashboard">📊 Dashboard</RouterLink>
      </nav>
    </header>

    <!-- Contenedor principal donde se renderiza la vista activa -->
    <main class="content">
      <!-- 
        RouterView: Aquí se renderizan las vistas de nivel superior (HomeView, DashboardView)
        Las rutas anidadas se renderizan en el RouterView de su componente padre
      -->
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Estilos globales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #333;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.title {
  color: #667eea;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.nav-main {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.nav-link {
  padding: 0.75rem 1.5rem;
  background: #f0f0f0;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

/* Clase activa automática de Vue Router */
.nav-link.router-link-active {
  background: #667eea;
  color: white;
}

.content {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 400px;
}
</style>
