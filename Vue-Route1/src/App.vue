<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <!-- Desde aquí accedemos al menu de navegacion y establecemos los enlaces -->
      <nav> 
        <!-- Indicamos el path al que deberá acceder -->
        <RouterLink to="/">Home</RouterLink> |
        <!-- En este caso accedemos a través del valor del name indicado en el archivo /router/index.js -->
        <!-- es mejor utilizar este método, porque en caso de variación de paths no tendríamos que cambiarlo en muchos documentos -->
        <RouterLink :to="{name:'about'}">About</RouterLink> |
        <RouterLink :to="{name:'servicios'}">Servicios</RouterLink> |
        <RouterLink :to="{name:'blog'}">Blog</RouterLink> |
        <RouterLink :to="{name:'contactos'}">Contactos</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

.router-link-exact-active{
  color: red;
}

</style>
