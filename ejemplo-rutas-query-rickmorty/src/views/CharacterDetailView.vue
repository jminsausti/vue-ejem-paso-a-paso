<template>
  <div>
    <h2>Detalle de personaje (por query)</h2>

    <!-- Mostramos la query completa para que se vea qué llega desde la URL -->
    <p>Query actual: <strong>{{ route.query }}</strong></p>

    <!-- Si no hay id en la query, explicamos al usuario qué hacer -->
    <p v-if="!characterId">No se ha indicado ningún id en la query.</p>

    <!-- Mensajes de carga y error -->
    <p v-else-if="loading">Cargando personaje...</p>
    <p v-else-if="error" style="color: red;">{{ error }}</p>

    <!-- Solo mostramos el detalle cuando ya tenemos datos del personaje -->
    <div v-else-if="character" class="detail">
      <img :src="character.image" :alt="character.name" />
      <h3>{{ character.name }}</h3>
      <p><strong>Estado:</strong> {{ character.status }}</p>
      <p><strong>Especie:</strong> {{ character.species }}</p>
      <p><strong>Género:</strong> {{ character.gender }}</p>
      <p><strong>Origen:</strong> {{ character.origin.name }}</p>
    </div>
  </div>
</template>

<script setup>
// Vista de detalle: lee el id desde la query y carga un personaje concreto
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// Accedemos a la ruta actual para leer sus query params
const route = useRoute()

// Convertimos route.query.id en número; si no existe, usamos 0
const characterId = computed(() => Number(route.query.id ?? 0))

// Estado local para guardar el personaje y el estado de carga
const character = ref(null)
const loading = ref(false)
const error = ref('')

// Función que hace la petición a la API de Rick and Morty
const fetchCharacter = async () => {
  if (!characterId.value) return
  loading.value = true
  error.value = ''
  character.value = null
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${characterId.value}`)
    if (!res.ok) {
      throw new Error('No se ha encontrado el personaje')
    }
    character.value = await res.json()
  } catch (e) {
    error.value = 'Error al cargar el personaje'
  } finally {
    loading.value = false
  }
}

// Al montar el componente, leemos la query una vez y cargamos el personaje
onMounted(fetchCharacter)
</script>

<style scoped>
.detail {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  max-width: 360px;
}

.detail img {
  width: 140px;
  height: 140px;
  border-radius: 999px;
  object-fit: cover;
}
</style>
