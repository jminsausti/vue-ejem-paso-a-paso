<template>
    <h1>Información del Curso</h1> 
    <div v-if="curso">
        <h2>Titulo: {{ curso.titulo }}</h2>
        <p>Descripción: {{ curso.descripcion }}</p>
        <p>Fecha: {{ curso.fecha }}</p>
    </div>  
</template>

<script setup>

    import { useRoute, useRouter } from 'vue-router'
    import { obtenerCursoPorId } from '../Servicios/CursosServicio.js'
    import { ref, onMounted } from 'vue'
    
    // Obtener el ID del curso desde los parámetros de la ruta
    const route = useRoute();
    // Obtener el router para navegación programática
    const router = useRouter();
    const curso = ref(null);
    
    console.log('ID del curso:', route.params.id);
    
    onMounted(async () => {
        curso.value = await obtenerCursoPorId(route.params.id);
        console.log('Datos del curso:', curso.value);
        
        // Volver a la vista de cursos después de 5 segundos
        setTimeout(() => {
            router.push('/cursos');
        }, 5000);
    });
</script>