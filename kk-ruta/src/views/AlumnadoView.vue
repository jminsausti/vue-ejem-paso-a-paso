<template>
<h1>Vista de alumnado</h1>
<h3>Listado de alumnos</h3>
<ul>
    <li v-for="alumno in alumnado" :key="alumno.id">
        {{ alumno.nombre }} - 
        <!-- Enlace que solo envía el ID por la URL -->
        <router-link :to="`/alumnado/${alumno.id}`">Ver idAlumno</router-link>
        |
        <!-- Enlace que envía todos los datos del alumno mediante 'state' -->
        <router-link 
            :to="{ 
                name: 'alumno-detalle', 
                params: { id: alumno.id },
                state: { alumno: alumno }
            }">
            Ver Detalles Completos
        </router-link>
    </li>
 </ul>

</template>
<script setup>
const alumnado = [
    { id: 1, nombre: 'Ana', curso: '2DW3', ciudad: 'Bilbao' },
    { id: 2, nombre: 'Jokin', curso: '2DW3', ciudad:'Durango' },
    { id: 3, nombre: 'Mary', curso: '1DW3', ciudad:'Bilbao' },
    { id: 4, nombre: 'Mikel', curso: '1DW3', ciudad:'Galdakao' },
];
</script>