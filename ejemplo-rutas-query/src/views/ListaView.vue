<template>
  <div>
    <h2>Lista filtrada por query</h2>

    <!--
      Formulario que controla los parámetros de búsqueda y página.
      Al enviar el formulario NO recargamos la página, simplemente
      actualizamos la query de la URL con router.push.
    -->
    <form @submit.prevent="aplicarFiltros">
      <label>
        Búsqueda:
        <!--
          v-model enlaza el input con la variable reactiva search.
          Lo que escribimos aquí se usará para construir la query "search".
        -->
        <input v-model="search" placeholder="Buscar por nombre" />
      </label>
      <!-- Paginación se controla ahora con botones Previous/Next inferiores -->
      <label style="margin-left: 1rem;">
        Elementos por página:
        <!-- Selector para elegir cuántos elementos mostrar por página -->
        <select v-model.number="perPageLocal">
          <option :value="2">2</option>
          <option :value="4">4</option>
          <option :value="8">8</option>
          <option :value="10">10</option>
        </select>
      </label>
      <button type="submit" style="margin-left: 1rem;">Aplicar (cambia query)</button>
    </form>

    <!--
      Mostramos el objeto $route.query tal cual para que el alumnado
      vea claramente qué hay dentro (por ejemplo { search: 'vue', page: '2' }).
    -->
    <p>
      Query actual en la URL:
      <strong>{{ $route.query }}</strong>
    </p>

    <h3>Resultados</h3>
    <ul>
      <li v-for="item in paginatedItems" :key="item.id">{{ item.name }}</li>
    </ul>

    <!-- Controles de paginación tipo Previous / Next -->
    <div style="margin-top: 1rem; display: flex; gap: .75rem; align-items: center;">
      <button type="button" @click="goPrevious" :disabled="page <= 1">Previous</button>
      <span>Página {{ page }} de {{ totalPages }}</span>
      <button type="button" @click="goNext" :disabled="page >= totalPages">Next</button>
    </div>
  </div>
</template>

<script setup>
// Composition API de Vue
import { computed, ref } from 'vue'
// Hooks del router para acceder a la ruta actual y para navegar
import { useRoute, useRouter } from 'vue-router'

// Obtenemos el router para poder hacer router.push
const router = useRouter()
// Obtenemos la ruta actual para leer sus query params
const route = useRoute()

// Datos "de mentira" para mostrar en la lista
const allItems = [
  { id: 1, name: 'Curso Vue básico' },
  { id: 2, name: 'Curso Vue intermedio' },
  { id: 3, name: 'Curso Vue avanzado' },
  { id: 4, name: 'Curso React' },
  { id: 5, name: 'Curso Angular' },
  { id: 6, name: 'Curso Svelte' },
  { id: 7, name: 'Curso Node.js' },
  { id: 8, name: 'Curso Django' },
  { id: 9, name: 'Curso Flask' },
  { id: 10, name: 'Curso Ruby on Rails' },
  { id: 11, name: 'Curso Laravel' },
  { id: 12, name: 'Curso Spring Boot' },
  { id: 13, name: 'Curso ASP.NET' },
  { id: 14, name: 'Curso PHP básico' },
  { id: 15, name: 'Curso Python para principiantes'},
  { id: 16, name: 'Curso Java para principiantes' }
]

// Leemos los valores iniciales desde la query de la URL, si existen.
// Ejemplos:
//   #/lista?search=vue&page=2
//   #/lista?search=react
// Nota: si el usuario cambia la query a mano en la URL, el formulario
//       no se actualizará automáticamente (eso se podría hacer con watch,
//       pero todavía no lo hemos visto).
const search = ref(route.query.search ?? '')
const page = ref(Number(route.query.page ?? 1))
// Valor por defecto de elementos por página, puede venir de la query
const perPageLocal = ref(Number(route.query.perPage ?? 2))

// Filtramos los elementos según el término de búsqueda
// IMPORTANTE: aquí usamos SOLO la query de la URL (route.query.search).
// Es decir, aunque escribamos en el input, hasta que no pulsemos
// "Aplicar" (y por tanto cambie la query), el filtro no se aplica.
const filteredItems = computed(() => {
  const termInUrl = (route.query.search ?? '').toString().toLowerCase()
  if (!termInUrl) return allItems
  return allItems.filter((item) => item.name.toLowerCase().includes(termInUrl))
})

// Hacemos una paginación muy simple en memoria
const perFromUrl = computed(() => Number(route.query.perPage ?? perPageLocal.value))

const totalPages = computed(() => {
  const total = filteredItems.value.length
  const size = perFromUrl.value || 1
  return Math.max(1, Math.ceil(total / size))
})

const paginatedItems = computed(() => {
  const size = perFromUrl.value
  const safePage = Math.min(Math.max(1, page.value), totalPages.value)
  const start = (safePage - 1) * size
  return filteredItems.value.slice(start, start + size)
})

// Cuando el usuario pulsa "Aplicar", actualizamos la URL con router.push
// y pasamos las querys deseadas.
const aplicarFiltros = () => {
  router.push({
    // Navegamos a la ruta "lista" (misma ruta, solo cambian las querys)
    name: 'lista',
    query: {
      // Si search está vacío, mejor no incluirlo en la query
      search: search.value || undefined,
      // Si la página es 1, tampoco la incluimos para no ensuciar la URL
      page: page.value !== 1 ? page.value : undefined,
      // Guardar en la URL cuántos elementos por página queremos
      perPage: perPageLocal.value !== 2 ? perPageLocal.value : undefined
    }
  })
}

// Navegación de paginación inferior
const goPrevious = () => {
  if (page.value > 1) {
    router.push({ name: 'lista', query: { search: route.query.search || undefined, perPage: perFromUrl.value !== 2 ? perFromUrl.value : undefined, page: page.value - 1 } })
    page.value = page.value - 1
  }
}

const goNext = () => {
  if (page.value < totalPages.value) {
    router.push({ name: 'lista', query: { search: route.query.search || undefined, perPage: perFromUrl.value !== 2 ? perFromUrl.value : undefined, page: page.value + 1 } })
    page.value = page.value + 1
  }
}
</script>
