<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <h1>Esto es HelloWorld</h1>

<RouterLink :to="{name: 'home'}">Ir a Home</RouterLink> | 
<RouterLink :to="{ name: 'alumnado'}">Ir a Alumnado</RouterLink> |
<RouterLink to="/about">Ir a About</RouterLink>

<RouterView />

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
