<template>
    <h1>Vista ID Alumnado</h1>
    <p>Has seleccionado al alumno con ID: {{ idAlumno }}</p>
    <button @click="atras">Volver</button>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const idAlumno = route.params.id;
const atras = () => {
    router.back();
};
</script>