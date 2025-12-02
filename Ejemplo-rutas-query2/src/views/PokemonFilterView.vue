<template>
  <div>
    <h2>Pokemons con filtros (por query)</h2>

    <section style="margin-bottom: 1rem;">
      <p>Filtro actual en la query: <strong>{{ route.query }}</strong></p>

      <button @click="aplicarFiltro('even')">IDs pares (filter=even)</button>
      <button @click="aplicarFiltro('odd')" style="margin-left: 0.5rem;">IDs impares (filter=odd)</button>
      <button @click="aplicarFiltro('')" style="margin-left: 0.5rem;">Sin filtro</button>
    </section>

    <p v-if="loading">Cargando pokemons...</p>
    <p v-else-if="error" style="color: red;">{{ error }}</p>

    <div v-else class="grid">
      <article v-for="pokemon in filteredPokemons" :key="pokemon.id" class="card">
        <img :src="pokemon.image" :alt="pokemon.name" />
        <h3>{{ pokemon.name }}</h3>
        <p>ID: {{ pokemon.id }}</p>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const pokemons = ref([])
const loading = ref(false)
const error = ref('')

const fetchPokemons = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
    const data = await res.json()

    pokemons.value = data.results.map((item) => {
      const parts = item.url.split('/').filter(Boolean)
      const id = Number(parts[parts.length - 1])
      return {
        id,
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      }
    })
  } catch (e) {
    error.value = 'Error al cargar pokemons'
  } finally {
    loading.value = false
  }
}

onMounted(fetchPokemons)

// Leemos el filtro directamente de la query (?filter=even | odd)
const currentFilter = computed(() => route.query.filter?.toString() ?? '')

const filteredPokemons = computed(() => {
  if (!currentFilter.value) return pokemons.value

  if (currentFilter.value === 'even') {
    return pokemons.value.filter((p) => p.id % 2 === 0)
  }

  if (currentFilter.value === 'odd') {
    return pokemons.value.filter((p) => p.id % 2 !== 0)
  }

  return pokemons.value
})

const aplicarFiltro = (filterValue) => {
  router.push({
    name: 'pokemon-filters',
    query: {
      filter: filterValue || undefined
    }
  })
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.card {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  text-align: center;
}

.card img {
  width: 80px;
  height: 80px;
}
</style>
