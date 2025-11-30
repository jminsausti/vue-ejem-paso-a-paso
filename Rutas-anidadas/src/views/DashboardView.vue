<script setup>
/**
 * DashboardView.vue - Vista padre con rutas anidadas
 * 
 * CONCEPTO CLAVE:
 * Este componente actúa como LAYOUT para las rutas hijas.
 * Contiene un <router-view> que renderiza las vistas anidadas definidas
 * en router/index.js dentro del array 'children'.
 * 
 * Todas las rutas hijas (/dashboard/profile, /dashboard/settings, etc.)
 * se renderizan dentro de este componente, manteniendo el sidebar visible.
 */
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="dashboard">
    <h2 class="dashboard-title">📊 Panel de Control</h2>
    
    <div class="dashboard-layout">
      <!-- Sidebar: Navegación para las rutas anidadas -->
      <aside class="sidebar">
        <h3>Navegación</h3>
        <nav class="sidebar-nav">
          <!-- 
            RouterLink para rutas anidadas
            - 'to' apunta a la ruta completa (/dashboard/profile)
            - Automáticamente añade clase 'router-link-active' cuando está activa
          -->
          <RouterLink class="sidebar-link" to="/dashboard">
            🏠 Inicio Dashboard
          </RouterLink>
          <RouterLink class="sidebar-link" to="/dashboard/profile">
            👤 Mi Perfil
          </RouterLink>
          <RouterLink class="sidebar-link" to="/dashboard/settings">
            ⚙️ Configuración
          </RouterLink>
          <RouterLink class="sidebar-link" to="/dashboard/notifications">
            🔔 Notificaciones
          </RouterLink>
        </nav>
      </aside>

      <!-- Área de contenido donde se renderizan las rutas hijas -->
      <div class="dashboard-content">
        <!-- 
          ROUTER-VIEW ANIDADO:
          Este <router-view> renderiza las rutas hijas (children) definidas en el router.
          Es diferente del <router-view> en App.vue (que renderiza vistas de nivel superior).
          
          Flujo de renderizado:
          1. App.vue <router-view> → DashboardView
          2. DashboardView <router-view> → ProfileView / SettingsView / etc.
        -->
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 1rem;
}

.dashboard-title {
  color: #667eea;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.dashboard-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  min-height: 400px;
}

/* Sidebar */
.sidebar {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content;
}

.sidebar h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar-link {
  padding: 0.75rem 1rem;
  background: white;
  color: #333;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.sidebar-link:hover {
  background: #e9ecef;
  transform: translateX(4px);
}

/* Clase activa de Vue Router */
.sidebar-link.router-link-active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

/* Área de contenido de las rutas hijas */
.dashboard-content {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  min-height: 400px;
}
</style>
