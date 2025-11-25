<template>
  <section class="character-filter">
    <!-- Aquí el alumnado añadirá un input para filtrar personajes y emitirá eventos al padre -->
    <label class="character-filter__label">
      Buscar por nombre:
      <input
        type="text"
        v-model="localSearch"
        @input="onInput"
        placeholder="Ej: Rick, Morty, Summer..."
        class="character-filter__input"
      />
    </label>
  </section>
</template>

<script setup>
// Gestionar aquí el término de búsqueda y los emits o v-model personalizados
import { ref } from 'vue';

const emit = defineEmits(['search-change']);

const localSearch = ref('');

const onInput = () => {
  emit('search-change', localSearch.value);
};
</script>

<style scoped>
 .character-filter {
   margin-bottom: 1rem;
 }

 .character-filter__label {
   display: flex;
   flex-direction: column;
   gap: 0.35rem;
   font-weight: 500;
 }

 .character-filter__input {
   padding: 0.35rem 0.5rem;
   border-radius: 4px;
   border: 1px solid #ccc;
   max-width: 260px;
 }
</style>
