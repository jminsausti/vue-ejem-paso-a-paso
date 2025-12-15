<template>
  <div id="app">
    <!-- Componente Navbar: barra de navegación principal -->
    <Navbar />

    <!-- RouterView: componente especial de Vue Router que renderiza la vista 
         correspondiente a la ruta actual -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Footer de la aplicación -->
    <footer class="footer">
      <p>&copy; 2025 Tienda Educativa - Vue 3 + Pinia + Router</p>
    </footer>
  </div>
</template>

<!-- Script setup: Composition API -->
<script setup>
// RouterView: componente que renderiza las vistas según la ruta
import { RouterView } from 'vue-router'
// Importar el componente Navbar
import Navbar from './components/Navbar.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
}

.footer p {
  margin: 0;
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}

/* Estilos para links */
a {
  color: #667eea;
  transition: color 0.3s;
}

a:hover {
  color: #764ba2;
}

/* Estilos para botones */
button {
  font-family: inherit;
}

/* Estilos para inputs (si se usan) */
input,
select,
textarea {
  font-family: inherit;
}
</style>
