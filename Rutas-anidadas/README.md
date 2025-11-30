# 🔗 Rutas Anidadas en Vue Router

Ejemplo completo de **rutas anidadas** (nested routes) en Vue 3 con Composition API.

## 📚 ¿Qué son las Rutas Anidadas?

Las rutas anidadas permiten crear estructuras de navegación jerárquicas donde:
- Una **ruta padre** contiene un `<router-view>` que renderiza **rutas hijas**
- Las rutas hijas heredan el path del padre
- El layout del componente padre se mantiene mientras cambian las vistas hijas

### Ejemplo de URLs:
```
/dashboard              → DashboardView + DashboardHome
/dashboard/profile      → DashboardView + ProfileView
/dashboard/settings     → DashboardView + SettingsView
/dashboard/notifications → DashboardView + NotificationsView
```

## 🏗️ Estructura del Proyecto

```
Rutas-anidadas/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.js                  # Punto de entrada
    ├── App.vue                  # Componente raíz con <router-view> principal
    ├── router/
    │   └── index.js            # Configuración de rutas con children[]
    └── views/
        ├── HomeView.vue        # Vista de inicio (explicación teórica)
        ├── DashboardView.vue   # Vista PADRE con <router-view> anidado
        └── dashboard/          # Vistas HIJAS
            ├── DashboardHome.vue
            ├── ProfileView.vue
            ├── SettingsView.vue
            └── NotificationsView.vue
```

## 🔑 Conceptos Clave

### 1. Configuración del Router (router/index.js)

```javascript
const routes = [
  {
    path: '/dashboard',        // Ruta padre
    component: DashboardView,
    children: [                // Array de rutas hijas
      {
        path: '',              // Ruta por defecto: /dashboard
        component: DashboardHome
      },
      {
        path: 'profile',       // /dashboard/profile
        component: ProfileView
      }
    ]
  }
]
```

**Puntos importantes:**
- Las rutas hijas se definen en el array `children: []`
- El `path` de las hijas es **relativo** al padre (sin `/` inicial)
- `path: ''` es la ruta por defecto cuando accedes solo al padre

### 2. Vista Padre (DashboardView.vue)

```vue
<template>
  <div>
    <aside>
      <!-- Navegación para rutas hijas -->
      <RouterLink to="/dashboard">Inicio</RouterLink>
      <RouterLink to="/dashboard/profile">Perfil</RouterLink>
    </aside>
    
    <main>
      <!-- Aquí se renderizan las vistas hijas -->
      <RouterView />
    </main>
  </div>
</template>
```

**Puntos importantes:**
- El componente padre **debe** tener un `<router-view>`
- El sidebar/layout del padre se mantiene visible
- Solo el contenido del `<router-view>` cambia al navegar

### 3. Flujo de Renderizado

```
App.vue
  └─ <router-view>           ← Renderiza vistas de nivel superior
      └─ DashboardView.vue
          └─ <router-view>   ← Renderiza vistas anidadas
              └─ ProfileView.vue
```

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias

```bash
cd Rutas-anidadas
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

### 3. Abrir en el navegador

El proyecto estará disponible en: `http://localhost:5173`

## 📖 Guía de Uso

1. **Inicio**: Abre la aplicación y lee la explicación teórica
2. **Dashboard**: Haz clic en "Dashboard" en el menú superior
3. **Navegación anidada**: Usa el sidebar para navegar entre:
   - 🏠 Inicio Dashboard
   - 👤 Mi Perfil
   - ⚙️ Configuración
   - 🔔 Notificaciones

## 💡 Características del Ejemplo

### Vistas Implementadas:

| Vista | Ruta | Demuestra |
|-------|------|-----------|
| **HomeView** | `/` | Explicación teórica de rutas anidadas |
| **DashboardHome** | `/dashboard` | Ruta hija por defecto (`path: ''`) |
| **ProfileView** | `/dashboard/profile` | Vista anidada con datos reactivos |
| **SettingsView** | `/dashboard/settings` | Formulario con `v-model` y eventos |
| **NotificationsView** | `/dashboard/notifications` | Lista dinámica con `v-for` y métodos |

### Código Comentado:

- ✅ Todos los componentes incluyen comentarios explicativos
- ✅ Explicación de cada concepto en el código
- ✅ Ejemplos de Composition API (`ref`, `onMounted`, etc.)
- ✅ Uso de `RouterLink` y `RouterView`

## 🎯 Conceptos de Vue Router Cubiertos

- ✅ Rutas anidadas con `children: []`
- ✅ Múltiples niveles de `<router-view>`
- ✅ Navegación con `RouterLink`
- ✅ Clase CSS automática `router-link-active`
- ✅ Rutas por defecto con `path: ''`
- ✅ Paths relativos en rutas hijas

## 📝 Ventajas de las Rutas Anidadas

1. **Reutilización de layouts**: El componente padre se mantiene
2. **URLs semánticas**: `/dashboard/profile` es más clara que `/profile`
3. **Organización**: Agrupa rutas relacionadas jerárquicamente
4. **Mejor UX**: Solo cambia la parte necesaria de la UI

## 🔧 Personalización

Para añadir una nueva vista anidada:

1. **Crear el componente** en `src/views/dashboard/`
2. **Importarlo** en `router/index.js`
3. **Añadirlo** al array `children` de `/dashboard`
4. **Crear RouterLink** en `DashboardView.vue`

Ejemplo:

```javascript
// router/index.js
import ReportsView from '../views/dashboard/ReportsView.vue'

children: [
  // ... otras rutas
  {
    path: 'reports',
    component: ReportsView
  }
]
```

## 📚 Recursos Adicionales

- [Vue Router - Rutas Anidadas](https://router.vuejs.org/guide/essentials/nested-routes.html)
- [Vue 3 - Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Vite - Guía de Inicio](https://vitejs.dev/guide/)

## 👨‍🏫 Para el Profesor

Este ejemplo está diseñado para:
- Explicar rutas anidadas de forma práctica y visual
- Mostrar código comentado y fácil de entender
- Demostrar conceptos de Composition API
- Servir como base para ejercicios de clase

**Sugerencias de ejercicios:**
1. Añadir una nueva vista anidada (ej: "Reportes")
2. Implementar navegación con parámetros dinámicos
3. Añadir guards de navegación
4. Crear un tercer nivel de anidamiento

---

**Desarrollado con Vue 3 + Vite + Vue Router 4**
