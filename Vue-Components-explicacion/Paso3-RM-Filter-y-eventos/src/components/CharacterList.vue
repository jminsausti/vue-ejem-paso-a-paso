<template>
  <section>
    <h2>Listado de personajes</h2>

    <CharacterFilter @search-change="onSearchChange" />

    <p v-if="isLoading">Cargando personajes...</p>

    <p v-else-if="error" class="error">
      Ha ocurrido un error al cargar los personajes: {{ error }}
    </p>

    <p v-else-if="filteredCharacters.length === 0">
      No se han encontrado personajes para "{{ searchTerm }}".
    </p>

    <ul v-else class="character-list">
      <li
        v-for="character in filteredCharacters"
        :key="character.id"
        class="character-item"
      >
        <CharacterCard :character="character" />
      </li>
    </ul>
  </section>
</template>

<script setup>
// Importar CharacterFilter y CharacterCard, gestionar aquí el estado y los eventos
import { ref, computed, onMounted } from 'vue';
import CharacterFilter from './CharacterFilter.vue';
import CharacterCard from './CharacterCard.vue';

const characters = ref([]);
const isLoading = ref(false);
const error = ref(null);
const searchTerm = ref('');

const filteredCharacters = computed(() => {
  const term = searchTerm.value.trim().toLowerCase();
  if (!term) return characters.value;
  return characters.value.filter((character) =>
    character.name.toLowerCase().includes(term)
  );
});

const onSearchChange = (newSearch) => {
  searchTerm.value = newSearch;
};

const loadCharacters = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    characters.value = data.results ?? [];
  } catch (err) {
    error.value = err.message ?? 'Error desconocido';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadCharacters();
});
</script>

<style scoped>
  .character-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }

  .character-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .error {
    color: #b00020;
    font-weight: bold;
  }
</style>
