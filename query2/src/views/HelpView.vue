<template>
  <section class="card">
    <h2>Ayuda: query en vue-router</h2>
    <p class="muted">Este ejemplo usa Composition API y <code>computed</code>  para sincronizar filtros con la URL.</p>
    <ul>
      <li><strong>Leer</strong>: <code>const route = useRoute(); route.query</code></li>
      <li><strong>Escribir</strong>: <code>router.push({ query: {...} })</code> o <code>router.replace</code></li>
      <li><strong>Arrays</strong>: <code>?tags=a&tags=b</code> llega como array</li>
    </ul>
    <p>Enlaces de ejemplo:</p>
    <p>
      <router-link :to="{ name: 'tasks', query: { q: 'slide' } }">q=slide</router-link>
      ·
      <router-link :to="{ name: 'tasks', query: { status: 'done' } }">status=done</router-link>
      ·
      <router-link :to="{ name: 'tasks', query: { q: 'router', status: 'open' } }">q=router&status=open</router-link>
    </p>
    <p class="muted">Query actual: <code>{{ route.fullPath }}</code></p>
  </section>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
