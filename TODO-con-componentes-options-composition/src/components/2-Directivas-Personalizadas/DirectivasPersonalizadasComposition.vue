<template>
    <!-- Cuando creamos una directiva personalizada, ésta se define en main.js, para que se aplique sobre todos los componentes de la App -->
   
    <h1>Aplicando directiva personalizada</h1>

    <p>Este parrafo no tiene directiva aplicada</p>
    <p v-fontSize>Este párrafo ha cambiado de tamaño la letra desde una directiva personalizada</p>
    <br>
    <p v-fontSize>{{ mensaje }}</p>
    <hr>
    <p v-customSize="25">Párrafo customizado a tamaño 25</p>
    <p v-customSize="40">Párrafo customizado a 40 px</p>
</template>

<script setup>
    import { ref, computed } from 'vue';
    const mensaje =ref('Directiva Aplicada')
    const size = ref (10)

</script>   


<style scoped>
</style>