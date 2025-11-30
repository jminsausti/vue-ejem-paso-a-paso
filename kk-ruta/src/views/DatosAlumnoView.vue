<template>
    <div>
        <h1>Todos los datos del alumno seleccionado</h1>
        
        <!-- Mostrar datos si existen -->
        <div v-if="alumnoData">
            <div class="alumno-card">
                <p><strong>ID:</strong> {{ alumnoData.id }}</p>
                <p><strong>Nombre:</strong> {{ alumnoData.nombre }}</p>
                <p><strong>Curso:</strong> {{ alumnoData.curso }}</p>
                <p><strong>Ciudad:</strong> {{ alumnoData.ciudad }}</p>
            </div>
            
            <router-link to="/alumnado">← Volver al listado</router-link>
        </div>
        
        <!-- Mensaje si no hay datos -->
        <div v-else>
            <p>No se han recibido datos del alumno.</p>
            <router-link to="/alumnado">← Volver al listado</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Recibir el objeto alumno completo desde history.state
const alumnoData = ref(null)

onMounted(() => {
    // Los datos vienen en history.state.alumno (pasados via 'state' en router-link)
    if (history.state.alumno) {
        alumnoData.value = history.state.alumno
        console.log('Datos del alumno recibidos:', alumnoData.value)
    } else {
        console.warn('No se recibieron datos del alumno en history.state')
    }
})
</script>