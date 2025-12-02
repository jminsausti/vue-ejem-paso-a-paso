<template>
  <div>
    <h2>Detalle de pokemon (por query)</h2>

    <p>
      Query actual: <strong>{{ route.query }}</strong>
    </p>

    <p v-if="!pokemonName">
      No se ha indicado ningún pokemon en la query.
      Usa la lista de pokemons para seleccionar uno.
    </p>

    <p v-else-if="loading">Cargando detalle de {{ pokemonName }}...</p>
    <p v-else-if="error" style="color: red;">{{ error }}</p>

    <!-- Solo mostramos el detalle si pokemonData ya está cargado -->
    <div v-else-if="pokemonData" class="detail">
      <img :src="imageUrl" :alt="pokemonData.name" />
      <h3>{{ pokemonData.name }}</h3>
      <p><strong>ID:</strong> {{ pokemonData.id }}</p>
      <p>
        <strong>Tipos:</strong>
        <span v-for="t in pokemonData.types" :key="t.type.name">{{ t.type.name }} </span>
      </p>
      <p>
        <strong>Peso:</strong> {{ pokemonData.weight }}
      </p>
      <p>
        <strong>Altura:</strong> {{ pokemonData.height }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pokemonName = computed(() => route.query.name?.toString() ?? '')
const pokemonData = ref(null)
const loading = ref(false)
const error = ref('')

const imageUrl = computed(() => {
  if (!pokemonData.value) return ''
  const id = pokemonData.value.id
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
})

const fetchPokemon = async () => {
  if (!pokemonName.value) return
  loading.value = true
  error.value = ''
  pokemonData.value = null
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`)
    if (!res.ok) {
      throw new Error('No se ha encontrado el pokemon')
    }
    pokemonData.value = await res.json()
  } catch (e) {
    error.value = 'Error al cargar el pokemon'
  } finally {
    loading.value = false
  }
}

onMounted(fetchPokemon)

// Si cambia la query (por ejemplo, desde la lista), recargamos el detalle
watch(
  () => route.query.name,
  () => {
    fetchPokemon()
  }
)
</script>

<style scoped>
.detail {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  max-width: 320px;
}

.detail img {
  width: 120px;
  height: 120px;
}
</style>
