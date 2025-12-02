<template>
  <div>
    <div class="card">
      <h2>🔍 Filtros con Query Params</h2>
      <p style="color: #666; margin-top: 5px;">
        Filtrar posts por usuario y completados usando query params
      </p>
      <p style="margin-top: 10px;">
        <strong>URL:</strong> <code>{{ route.fullPath }}</code>
      </p>
    </div>

    <div class="card">
      <div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center;">
        <div>
          <label style="display: block; margin-bottom: 5px; font-size: 14px;">Usuario:</label>
          <select v-model="selectedUserId">
            <option value="">Todos</option>
            <option v-for="id in uniqueUserIds" :key="id" :value="id">
              Usuario {{ id }}
            </option>
          </select>
        </div>

        <div>
          <label style="display: block; margin-bottom: 5px; font-size: 14px;">Estado:</label>
          <select v-model="selectedCompleted">
            <option value="">Todos</option>
            <option value="true">Completados</option>
            <option value="false">Pendientes</option>
          </select>
        </div>

        <div style="display: flex; gap: 10px; align-items: flex-end;">
          <button @click="applyFilters">
            Aplicar Filtros
          </button>
          <button @click="clearFilters" style="background: #f0f0f0; color: #333;">
            Limpiar
          </button>
        </div>
      </div>

      <p style="margin-top: 15px; color: #666;">
        💡 Los filtros se guardan en la URL y persisten al recargar
      </p>
    </div>

    <div v-if="loading" class="card">
      <p>⏳ Cargando todos...</p>
    </div>

    <div v-else class="card">
      <p style="margin-bottom: 15px;">
        <strong>Resultados: {{ filteredTodos.length }}</strong> de {{ totalTodos }} todos
      </p>

      <div v-if="filteredTodos.length > 0" class="todo-list">
        <div v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
          <div style="display: flex; gap: 10px; align-items: center;">
            <span 
              :style="{
                background: todo.completed ? '#4caf50' : '#ff9800',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '3px',
                fontSize: '12px'
              }"
            >
              {{ todo.completed ? '✓ Hecho' : '○ Pendiente' }}
            </span>
            <span style="background: #333; color: white; padding: 4px 8px; border-radius: 3px; font-size: 12px;">
              #{{ todo.id }}
            </span>
            <span style="color: #666; font-size: 14px;">
              Usuario {{ todo.userId }}
            </span>
          </div>
          <p 
            :style="{
              marginTop: '8px',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#999' : '#333'
            }"
          >
            {{ todo.title }}
          </p>
        </div>
      </div>

      <p v-else style="color: #999; text-align: center; padding: 20px;">
        No hay resultados con estos filtros
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Estado
const todos = ref([]);
const loading = ref(true);
const selectedUserId = ref('');
const selectedCompleted = ref('');

// Usuarios únicos
const uniqueUserIds = computed(() => {
  const ids = [...new Set(todos.value.map(t => t.userId))];
  return ids.sort((a, b) => a - b);
});

const totalTodos = computed(() => todos.value.length);

// Todos filtrados según query params
const filteredTodos = computed(() => {
  const userIdFromUrl = route.query.userId;
  const completedFromUrl = route.query.completed;

  return todos.value.filter(todo => {
    const matchUser = !userIdFromUrl || todo.userId === parseInt(userIdFromUrl);
    const matchCompleted = !completedFromUrl || todo.completed === (completedFromUrl === 'true');
    return matchUser && matchCompleted;
  });
});

// Aplicar filtros
function applyFilters() {
  const query = {};
  if (selectedUserId.value) query.userId = selectedUserId.value;
  if (selectedCompleted.value) query.completed = selectedCompleted.value;
  router.push({ query });
}

// Limpiar filtros
function clearFilters() {
  selectedUserId.value = '';
  selectedCompleted.value = '';
  router.push({ query: {} });
}

// Sincronizar inputs con URL
function syncInputsWithUrl() {
  selectedUserId.value = route.query.userId || '';
  selectedCompleted.value = route.query.completed || '';
}

// Cargar todos
async function loadTodos() {
  loading.value = true;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    todos.value = await response.json();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loading.value = false;
  }
}

// Observar cambios en la URL
watch(() => route.query, () => {
  syncInputsWithUrl();
}, { deep: true });

onMounted(() => {
  loadTodos();
  syncInputsWithUrl();
});
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.todo-item {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 6px;
  background: #fafafa;
}
</style>
