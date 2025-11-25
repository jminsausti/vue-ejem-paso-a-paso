<template>
  <section>
    <h2>Listado de personajes</h2>

    <p v-if="isLoading">Cargando personajes...</p>

    <p v-else-if="error" class="error">
      Ha ocurrido un error al cargar los personajes: {{ error }}
    </p>

    <ul v-else class="character-list">
      <li
        v-for="character in characters"
        :key="character.id"
        class="character-item"
      >
        <CharacterCard :character="character" />
      </li>
    </ul>
  </section>
</template>

<script setup>
 import { ref, onMounted } from 'vue';
 import CharacterCard from './CharacterCard.vue';

 const characters = ref([]);
 const isLoading = ref(false);
 const error = ref(null);

 const loadCharacters = async () => {
   isLoading.value = true;
   error.value = null;

   try {
     const response = await fetch('https://rickandmortyapi.com/api/character');

     if (!response.ok) {
       throw new Error(`Error HTTP: ${response.status}`);
     }
     
     const data = await response.json();
     console.log(data)
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
   padding: 0.5rem;
   border: 1px solid #ddd;
   border-radius: 4px;
   background-color: #fafafa;
 }

 .character-item img {
   width: 120px;
   height: 120px;
   object-fit: cover;
   border-radius: 50%;
   margin-bottom: 0.5rem;
 }

 .error {
   color: #b00020;
   font-weight: bold;
 }
</style>
