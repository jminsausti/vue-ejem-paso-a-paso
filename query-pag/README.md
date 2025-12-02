# 🚀 Vue 3 - Operaciones con JSONPlaceholder API

Proyecto educativo completo que demuestra operaciones avanzadas con datos en Vue 3 usando **Composition API**, **Vue Router** y **query parameters**.

## 🎯 Objetivos de aprendizaje

Este proyecto enseña:

1. ✅ **Paginación** con query params (`?page=X`)
2. ✅ **Filtros múltiples** sincronizados con URL
3. ✅ **Búsqueda en tiempo real** con debounce
4. ✅ **Ordenamiento dinámico** de datos
5. ✅ **useRoute()** y **useRouter()** de Vue Router
6. ✅ Propiedades **computed()** reactivas
7. ✅ **watch()** para observar cambios
8. ✅ Peticiones **fetch** a API externa
9. ✅ Sincronización URL ↔ Estado de la aplicación

## 🚀 Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📋 Características por vista

### 1️⃣ Vista de Paginación (`/pagination`)
- Navega entre **100 posts** de la API
- **10 posts por página**
- Botones: Primera, Anterior, Números, Siguiente, Última
- URL persistente: `?page=5`
- Validación automática de páginas inexistentes

### 2️⃣ Vista de Filtros (`/filters`)
- Filtra **200 todos** por usuario y estado
- Query params: `?userId=1&completed=true`
- Sincronización bidireccional URL ↔ Filtros
- Contador de resultados en tiempo real

### 3️⃣ Vista de Búsqueda (`/search`)
- Búsqueda por título con **debounce 500ms**
- Resaltado de coincidencias
- Ordenamiento: ID, Título, Usuario
- Paginación de resultados
- Query params: `?q=search&sort=title&page=2`

## 🔍 Conceptos clave implementados

### Query Params en la URL

```javascript
// Leer desde la URL
const currentPage = computed(() => {
  return parseInt(route.query.page) || 1;
});

// Actualizar la URL
function goToPage(page) {
  router.push({ query: { page } });
}
```

### Filtros sincronizados

```javascript
// Filtrar según query params
const filtered = computed(() => {
  return data.value.filter(item => {
    const matchUser = !route.query.userId || 
                      item.userId === parseInt(route.query.userId);
    return matchUser;
  });
});
```

### Búsqueda con debounce

```javascript
let searchTimeout = null;

function onSearchInput() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    updateUrl();
  }, 500);
}
```

## 📂 Estructura del proyecto

```
query-pag/
├── src/
│   ├── App.vue                  # Layout principal con navegación
│   ├── main.js                  # Punto de entrada
│   ├── router/
│   │   └── index.js             # Configuración de rutas
│   └── views/
│       ├── PaginationView.vue   # Vista de paginación
│       ├── FiltersView.vue      # Vista de filtros
│       └── SearchView.vue       # Vista de búsqueda
├── index.html
├── package.json
└── vite.config.js
```

## 🧪 Casos de prueba

### Paginación
- Navega a `?page=10` manualmente en la URL
- Prueba `?page=999` (debe redirigir a última válida)
- Usa botones de navegación

### Filtros
- Aplica filtro: `?userId=3&completed=true`
- Recarga la página (persiste)
- Limpia filtros y observa la URL

### Búsqueda
- Escribe "qui" y observa el debounce
- Cambia ordenamiento
- Comparte la URL con búsqueda activa

## 📚 APIs utilizadas

- **Posts**: `https://jsonplaceholder.typicode.com/posts` (100 items)
- **Todos**: `https://jsonplaceholder.typicode.com/todos` (200 items)
- Sin autenticación, acceso libre

## 💡 Ventajas de Query Params

✅ **URLs compartibles**: Envía el estado exacto  
✅ **Navegación del navegador**: Botones atrás/adelante funcionan  
✅ **SEO friendly**: Cada combinación es indexable  
✅ **Estado persistente**: Recargar mantiene filtros/búsquedas  
✅ **Bookmarkeable**: Guarda búsquedas frecuentes  

## 🎨 Personalización

Modifica estos valores en cada vista:

- `postsPerPage` / `resultsPerPage`: Items por página
- `searchTimeout`: Tiempo de debounce (500ms)
- Estilos CSS en componentes scoped

## 📝 Notas técnicas

Este es un proyecto **educativo** con código comentado. En producción considera:

- Paginación del servidor (no cargar todo)
- Caché de resultados con composables
- Lazy loading de componentes
- Estado global con Pinia/Vuex
- Manejo avanzado de errores
- Tests unitarios e2e
