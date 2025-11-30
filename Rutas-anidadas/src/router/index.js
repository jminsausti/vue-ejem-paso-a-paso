import { createRouter, createWebHistory } from 'vue-router'

// Importar vistas principales
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'

// Importar vistas anidadas del Dashboard
import DashboardHome from '../views/dashboard/DashboardHome.vue'
import ProfileView from '../views/dashboard/ProfileView.vue'
import SettingsView from '../views/dashboard/SettingsView.vue'
import NotificationsView from '../views/dashboard/NotificationsView.vue'

/**
 * Configuración de rutas con anidamiento
 * 
 * RUTAS ANIDADAS:
 * - Se definen con la propiedad 'children' en una ruta padre
 * - La ruta padre debe tener un <router-view> donde se renderizan las rutas hijas
 * - Las rutas hijas heredan el path del padre
 * - Ejemplo: /dashboard/profile combina el path padre (/dashboard) + hijo (/profile)
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // RUTA PADRE: Dashboard
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    
    // RUTAS HIJAS (anidadas): Se renderizan dentro del <router-view> de DashboardView
    children: [
      {
        // Ruta por defecto cuando accedes a /dashboard
        // El path vacío '' significa que se muestra cuando estás exactamente en /dashboard
        path: '',
        name: 'dashboard-home',
        component: DashboardHome
      },
      {
        // Ruta hija: /dashboard/profile
        // No lleva '/' al inicio porque es relativa al padre
        path: 'profile',
        name: 'dashboard-profile',
        component: ProfileView
      },
      {
        // Ruta hija: /dashboard/settings
        path: 'settings',
        name: 'dashboard-settings',
        component: SettingsView
      },
      {
        // Ruta hija: /dashboard/notifications
        path: 'notifications',
        name: 'dashboard-notifications',
        component: NotificationsView
      }
    ]
  }
]

// Crear instancia del router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
