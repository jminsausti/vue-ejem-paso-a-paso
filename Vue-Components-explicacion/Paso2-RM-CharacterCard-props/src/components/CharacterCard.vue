<template>
  <article class="character-card">
    <!-- Aquí el alumnado mostrará los datos del personaje recibidos por props -->
    <img :src="character.image" :alt="character.name" class="character-card__image" />
    <h3 class="character-card__name">{{ character.name }}</h3>
    <p class="character-card__meta">
      <span class="character-card__status">Estado: {{ character.status }}</span>
      <span class="character-card__species">Especie: {{ character.species }}</span>
    </p>
  </article>
</template>

<script setup>
// Definir aquí las props del personaje usando Composition API
const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.character-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.character-card__image {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.character-card__name {
  font-size: 1rem;
  margin: 0.25rem 0 0.5rem;
  text-align: center;
}

.character-card__meta {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  font-size: 0.875rem;
  text-align: center;
}
</style>
