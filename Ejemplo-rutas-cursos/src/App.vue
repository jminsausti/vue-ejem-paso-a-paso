<script setup>
import {RouterLink, RouterView} from 'vue-router' 

</script>

<template>
  <div class="app">
    <header class="header">
      <h1 class="title">Bienvenidos a Vue Router</h1>
      <p class="subtitle">Navega entre vistas usando enlaces reactivos.</p>
      <nav class="nav">
        <!-- Navegación principal -->
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/cursos">Cursos</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
      </nav>
    </header>

    <section class="content card">
      <!-- Vista activa según la ruta -->
      <RouterView />
    </section>
  </div>
  
</template>

<style scoped>
/* Layout base */
:global(html, body, #app) { height: 100%; }
:global(body) {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  color: #1f2937; /* slate-800 */
  background: radial-gradient(1000px 480px at 10% -10%, #e0f2fe 0%, rgba(224,242,254,0) 60%),
              radial-gradient(700px 360px at 90% 0%, #ede9fe 0%, rgba(237,233,254,0) 60%),
              linear-gradient(180deg, #f8fafc 0%, #ffffff 100%); /* slate-50 -> white */
}

.app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 1.25rem 3rem;
}

.header {
  text-align: center;
}

.title {
  margin: 0 0 .25rem;
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  font-weight: 700;
  letter-spacing: .4px;
  color: #0f172a; /* slate-900 */
}

.subtitle {
  margin: 0;
  color: #475569; /* slate-600 */
  font-size: .95rem;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
  justify-content: center;
  margin-top: 1rem;
}

.link {
  text-decoration: none;
  padding: .55rem 1rem;
  border-radius: .65rem;
  border: 1px solid #dbeafe; /* blue-100 */
  background: rgba(37,99,235,.08); /* blue-600 @ 8% */
  color: #1e3a8a; /* blue-800 */
  transition: transform .12s ease, background .12s ease, border-color .12s ease;
}

.link:hover {
  transform: translateY(-1px);
  background: rgba(37,99,235,.14);
  border-color: #bfdbfe; /* blue-200 */
}

.card {
  width: min(960px, 100%);
  background: #ffffff;
  border: 1px solid #e5e7eb; /* gray-200 */
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 10px 24px rgba(15,23,42,.08); /* soft slate shadow */
}

.content {
  min-height: 140px;
}
</style>
