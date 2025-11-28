<template>
  <h1>Cursos</h1>
  <ul>
    <li v-for="curso in cursos" :key="curso.id">
      {{ curso.titulo }} - 
        <RouterLink :to="`/cursos/${curso.id}`">Ver detalles</RouterLink>   

    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { obtenerCursos } from "../Servicios/CursosServicio.js";

const cursos = ref([]);

// Cargar los cursos al montar el componente
onMounted(async () => {
  cursos.value = await obtenerCursos();
});
</script>
