<template>
  <div>
    <h2>Personajes con filtros (por query)</h2>

    <!--
      Mostramos siempre el objeto route.query para que se vea
      qué valor de "status" está aplicando el filtro.
    -->
    <section style="margin-bottom: 1rem;">
      <p>Filtro actual en la query: <strong>{{ route.query }}</strong></p>

      <!-- Estos botones solo cambian la query (?status=...) con router.push -->
      <button @click="applyFilter('alive')">Vivos (status=alive)</button>
      <button @click="applyFilter('dead')" style="margin-left: 0.5rem;">Muertos (status=dead)</button>
      <button @click="applyFilter('unknown')" style="margin-left: 0.5rem;">Desconocido (status=unknown)</button>
      <button @click="applyFilter('')" style="margin-left: 0.5rem;">Sin filtro</button>
    </section>

    <!-- Mensajes de carga y error -->
    <p v-if="loading">Cargando personajes...</p>
    <p v-else-if="error" style="color: red;">{{ error }}</p>

    <!-- Listado filtrado según la query ?status=... -->
    <div v-else class="grid">
      <article v-for="character in filteredCharacters" :key="character.id" class="card">
        <img :src="character.image" :alt="character.name" />
        <h3>{{ character.name }}</h3>
        <p>Estado: {{ character.status }}</p>
      </article>
    </div>
  </div>
</template>

<script setup>
// Vista de filtros: usamos una query (?status=...) para decidir
// qué personajes mostrar (alive, dead, unknown o todos).
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const characters = ref([])
const loading = ref(false)
const error = ref('')

// Cargamos personajes una vez desde la API
const fetchCharacters = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    characters.value = data.results
  } catch (e) {
    error.value = 'Error al cargar personajes'
  } finally {
    loading.value = false
  }
}

onMounted(fetchCharacters)

// Leemos el valor de status directamente de la query (?status=alive, dead, unknown)
const currentStatus = computed(() => route.query.status?.toString() ?? '')

// Este computed aplica el filtro en memoria según currentStatus
const filteredCharacters = computed(() => {
  if (!currentStatus.value) return characters.value
  return characters.value.filter((c) => c.status.toLowerCase() === currentStatus.value.toLowerCase())
})

// Cambiamos la query status usando router.push, sin recargar la página
const applyFilter = (statusValue) => {
  router.push({
    name: 'characters-filters',
    query: {
      status: statusValue || undefined
    }
  })
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
}

.card {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  text-align: center;
}

.card img {
  width: 100px;
  height: 100px;
  border-radius: 999px;
  object-fit: cover;
}
</style>
