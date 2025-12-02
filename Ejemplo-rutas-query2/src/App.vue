<template>
  <div style="font-family: system-ui, sans-serif; padding: 1rem;">
    <h1>Rutas con query - Pokemons</h1>

    <nav style="margin-bottom: 1rem;">
      <RouterLink :to="{ name: 'pokemons-list' }">Lista de pokemons</RouterLink>
      |
      <RouterLink :to="{ name: 'pokemon-filters' }">Pokemons con filtros</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<script setup>
// Layout principal con el menú y el RouterView.
</script>
