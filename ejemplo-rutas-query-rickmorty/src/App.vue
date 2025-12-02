<template>
  <div style="font-family: system-ui, sans-serif; padding: 1rem;">
    <h1>Rutas con query - Rick and Morty</h1>

    <nav style="margin-bottom: 1rem;">
      <RouterLink :to="{ name: 'characters-list' }">Lista de personajes</RouterLink>
      |
      <RouterLink :to="{ name: 'characters-filters' }">Personajes con filtros</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<script setup>
</script>
