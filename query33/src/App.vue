<template>
  <div>
    <header>
      <div class="container">
        <h1 style="margin:0 0 8px 0">Tareas + Query</h1>
        <nav>
          <router-link to="/">Tareas</router-link>
          <router-link :to="{ name: 'help' }">Ayuda</router-link>
        </nav>
      </div>
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>
<script setup>
</script>
