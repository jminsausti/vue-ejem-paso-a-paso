<template>
  <section class="card">
    <h2>Lista de tareas</h2>
    <div class="row">
      <input v-model="search" placeholder="Buscar por título..." />
      <select v-model="status">
        <option value="">Todos</option>
        <option value="open">Abiertas</option>
        <option value="done">Hechas</option>
      </select>
      <button class="primary" @click="apply(false)">Aplicar (push)</button>
      <span class="muted">URL: <code>{{ route.fullPath }}</code></span>
    </div>

    <ul style="margin-top:12px">
      <li v-for="t in filtered" :key="t.id">
        <span :class="['pill']">#{{ t.id }}</span>
        <strong>{{ t.title }}</strong>
        <span class="muted">· {{ t.status }}</span>
      </li>
      <li v-if="filtered.length===0" class="muted">No hay tareas con esos filtros</li>
    </ul>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Datos de ejemplo
const tasks = [
  { id: 1, title: 'Preparar slides', status: 'open' },
  { id: 2, title: 'Revisar ejercicios', status: 'done' },
  { id: 3, title: 'Crear ejemplo router', status: 'open' },
  { id: 4, title: 'Subir repositorio', status: 'done' },
  { id: 5, title: 'Corregir tests', status: 'open' },
];

// Inputs locales: solo aplican a la URL cuando pulsas los botones
const search = ref(String(route.query.q ?? ''));
const status = ref(String(route.query.status ?? ''));

function apply(){
  // Actualiza la URL con los valores actuales de los inputs
  const q = { ...route.query };
  // Si el valor es vacío, se elimina de la URL, si no, se añade/actualiza
  if (!search.value) delete q.q; else q.q = search.value;
  // Lo mismo para el estado
  if (!status.value) delete q.status; else q.status = status.value;
  router.push({ query: q });
}

// La lista se filtra con lo que está en la URL (fuente de verdad)
const qApplied = computed(() => String(route.query.q ?? ''));
const statusApplied = computed(() => String(route.query.status ?? ''));

const filtered = computed(() => {
  return tasks.filter(t => {
    // Filtrado por título y estado
    // El título se busca sin distinguir mayúsculas/minúsculas. 
    const matchQ = String(t.title).toLowerCase().includes(qApplied.value.toLowerCase());
    // El estado se compara directamente
    const matchS = !statusApplied.value || t.status === statusApplied.value;
    // Solo se incluye si cumple ambos filtros
    return matchQ && matchS;
  });
});
</script>
