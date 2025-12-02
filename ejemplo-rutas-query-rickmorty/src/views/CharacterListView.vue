<template>
  <div>
    <h2>Lista de personajes</h2>

    <!-- Mensajes de carga y error al llamar a la API -->
    <p v-if="loading">Cargando personajes...</p>
    <p v-else-if="error" style="color: red;">{{ error }}</p>

    <!-- Cuando ya tenemos datos, mostramos una cuadrícula de tarjetas -->
    <div v-else class="grid">
      <article
        v-for="character in characters"
        :key="character.id"
        class="card"
        @click="goToDetail(character)"
      >
        <img :src="character.image" :alt="character.name" />
        <h3>{{ character.name }}</h3>
      </article>
    </div>
  </div>
</template>

<script setup>
// Vista de lista: pedimos personajes a la API y los mostramos en tarjetas
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Estado local: listado, loading, error
const characters = ref([])
const loading = ref(false)
const error = ref('')

// Llamamos a la API de Rick and Morty para obtener personajes
const fetchCharacters = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    // Nos quedamos con el array results que trae id, name, image, etc.
    characters.value = data.results
  } catch (e) {
    error.value = 'Error al cargar personajes'
  } finally {
    loading.value = false
  }
}

// Al montar el componente, lanzamos la petición
onMounted(fetchCharacters)

// Al hacer clic en una tarjeta, navegamos a la ruta de detalle
// pasando el id del personaje en la query (?id=...)
const goToDetail = (character) => {
  router.push({
    name: 'character-detail',
    query: {
      id: character.id
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
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  text-align: center;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 0 0 2px #4f46e5;
}

.card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 999px;
}
</style>
