<template>
  <div>
    <div class="card">
      <h2>🔎 Búsqueda en Tiempo Real</h2>
      <p style="color: #666; margin-top: 5px;">
        Buscar posts por título con debounce y query params
      </p>
      <p style="margin-top: 10px;">
        <strong>URL:</strong> <code>{{ route.fullPath }}</code>
      </p>
    </div>

    <div class="card">
      <div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: flex-end;">
        <div style="flex: 1; min-width: 250px;">
          <label style="display: block; margin-bottom: 5px; font-size: 14px;">
            Buscar por título:
          </label>
          <input 
            v-model="searchTerm" 
            type="text"
            placeholder="Escribe para buscar..."
            style="width: 100%;"
            @input="onSearchInput"
          />
        </div>

        <div>
          <label style="display: block; margin-bottom: 5px; font-size: 14px;">
            Ordenar por:
          </label>
          <select v-model="sortBy" @change="updateUrl">
            <option value="id">ID</option>
            <option value="title">Título</option>
            <option value="userId">Usuario</option>
          </select>
        </div>

        <button @click="clearSearch" style="background: #f0f0f0; color: #333;">
          Limpiar
        </button>
      </div>

      <p style="margin-top: 15px; color: #666;">
        💡 La búsqueda tiene debounce de 500ms y se guarda en la URL
      </p>
    </div>

    <div v-if="loading" class="card">
      <p>⏳ Cargando posts...</p>
    </div>

    <div v-else class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <p>
          <strong>Resultados: {{ sortedAndFilteredPosts.length }}</strong> de {{ totalPosts }} posts
        </p>
        <p v-if="searchTerm" style="color: #666; font-size: 14px;">
          Buscando: "{{ searchTerm }}"
        </p>
      </div>

      <div v-if="sortedAndFilteredPosts.length > 0" class="post-list">
        <div v-for="post in paginatedPosts" :key="post.id" class="post-item">
          <div style="display: flex; gap: 10px; margin-bottom: 8px; align-items: center;">
            <span style="background: #333; color: white; padding: 4px 8px; border-radius: 3px; font-size: 12px;">
              #{{ post.id }}
            </span>
            <span style="color: #666; font-size: 14px;">
              Usuario {{ post.userId }}
            </span>
          </div>
          <h3 style="margin-bottom: 8px;" v-html="highlightMatch(post.title)"></h3>
          <p style="color: #555;">{{ post.body }}</p>
        </div>
      </div>

      <p v-else style="color: #999; text-align: center; padding: 20px;">
        {{ searchTerm ? 'No hay resultados para esta búsqueda' : 'Escribe algo para buscar' }}
      </p>

      <!-- Paginación simple -->
      <div v-if="sortedAndFilteredPosts.length > resultsPerPage" class="pagination">
        <button @click="changePage(-1)" :disabled="currentPage === 1">
          ← Anterior
        </button>
        <span style="padding: 0 15px;">
          Página {{ currentPage }} de {{ totalResultPages }}
        </span>
        <button @click="changePage(1)" :disabled="currentPage === totalResultPages">
          Siguiente →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Estado
const posts = ref([]);
const loading = ref(true);
const searchTerm = ref('');
const sortBy = ref('id');
const currentPage = ref(1);
const resultsPerPage = 15;
let searchTimeout = null;

const totalPosts = computed(() => posts.value.length);

// Posts filtrados por búsqueda
const sortedAndFilteredPosts = computed(() => {
  let filtered = posts.value;

  // Filtrar por término de búsqueda
  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase();
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(term)
    );
  }

  // Ordenar
  return [...filtered].sort((a, b) => {
    if (sortBy.value === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy.value === 'userId') {
      return a.userId - b.userId;
    } else {
      return a.id - b.id;
    }
  });
});

// Paginación de resultados
const totalResultPages = computed(() => 
  Math.ceil(sortedAndFilteredPosts.value.length / resultsPerPage)
);

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * resultsPerPage;
  const end = start + resultsPerPage;
  return sortedAndFilteredPosts.value.slice(start, end);
});

// Resaltar coincidencias
function highlightMatch(text) {
  if (!searchTerm.value) return text;
  const regex = new RegExp(`(${searchTerm.value})`, 'gi');
  return text.replace(regex, '<mark style="background: yellow; padding: 2px;">$1</mark>');
}

// Búsqueda con debounce
function onSearchInput() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    currentPage.value = 1; // Reset a página 1 al buscar
    updateUrl();
  }, 500);
}

// Actualizar URL
function updateUrl() {
  const query = {};
  if (searchTerm.value) query.q = searchTerm.value;
  if (sortBy.value !== 'id') query.sort = sortBy.value;
  if (currentPage.value > 1) query.page = currentPage.value;
  router.push({ query });
}

// Limpiar búsqueda
function clearSearch() {
  searchTerm.value = '';
  sortBy.value = 'id';
  currentPage.value = 1;
  router.push({ query: {} });
}

// Cambiar página
function changePage(direction) {
  const newPage = currentPage.value + direction;
  if (newPage >= 1 && newPage <= totalResultPages.value) {
    currentPage.value = newPage;
    updateUrl();
  }
}

// Sincronizar con URL
function syncWithUrl() {
  searchTerm.value = route.query.q || '';
  sortBy.value = route.query.sort || 'id';
  currentPage.value = parseInt(route.query.page) || 1;
}

// Cargar posts
async function loadPosts() {
  loading.value = true;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts.value = await response.json();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loading.value = false;
  }
}

// Observar cambios en filtros para resetear página
watch([searchTerm, sortBy], () => {
  if (currentPage.value > totalResultPages.value) {
    currentPage.value = 1;
  }
});

onMounted(() => {
  loadPosts();
  syncWithUrl();
});
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post-item {
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.post-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.post-item h3 {
  text-transform: capitalize;
  font-size: 16px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
</style>
