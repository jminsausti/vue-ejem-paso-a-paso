<template>
  <div>
    <h2>Lista de pokemons (PokéAPI)</h2>

    <p v-if="loading">Cargando pokemons...</p>
    <p v-else-if="error" style="color: red;">{{ error }}</p>

    <div v-else class="grid">
      <article
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        class="card"
        @click="verDetalle(pokemon)"
      >
        <img :src="pokemon.image" :alt="pokemon.name" />
        <h3>{{ pokemon.name }}</h3>
      </article>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const pokemons = ref([])
const loading = ref(false)
const error = ref('')

const fetchPokemons = async () => {
  loading.value = true
  error.value = ''
  try {
    // Obtenemos los primeros 30 pokemons de la PokéAPI
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
    const data = await res.json()
    console.log(data)

    // La API nos da name y url. De la url sacamos el id.
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

// Al hacer clic en una tarjeta, navegamos a la vista de detalle
// pasando el nombre del pokemon en la query.
const verDetalle = (pokemon) => {
  router.push({
    name: 'pokemon-detail',
    query: {
      name: pokemon.name
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
  width: 80px;
  height: 80px;
}
</style>
