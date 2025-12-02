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
      <label style="margin-left: 1rem;">
        Página:
        <!--
          v-model.number enlaza con page y además convierte a número.
          Este valor se usará para la query "page".
        -->
        <input v-model.number="page" type="number" min="1" />
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
  { id: 6, name: 'Curso Svelte' }
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
const perPage = 10

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
const paginatedItems = computed(() => {
  const start = (page.value - 1) * perPage
  return filteredItems.value.slice(start, start + perPage)
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
      page: page.value !== 1 ? page.value : undefined
    }
  })
}
</script>
