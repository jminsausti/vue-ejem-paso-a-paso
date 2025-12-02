<template>
  <div>
    <div class="card">
      <h2>📄 Paginación de Posts</h2>
      <p style="color: #666; margin-top: 5px;">
        Navegación entre páginas usando query params (<code>?page=X</code>)
      </p>
      <p style="margin-top: 10px;">
        <strong>URL:</strong> <code>{{ route.fullPath }}</code>
      </p>
    </div>

    <div v-if="loading" class="card">
      <p>⏳ Cargando posts...</p>
    </div>

    <div v-else>
      <div class="card">
        <p style="margin-bottom: 15px;">
          <strong>Página {{ currentPage }} de {{ totalPages }}</strong> 
          (Total: {{ totalPosts }} posts)
        </p>

        <div class="post-list">
          <div v-for="post in currentPosts" :key="post.id" class="post-item">
            <div style="display: flex; gap: 10px; margin-bottom: 8px;">
              <span style="background: #333; color: white; padding: 4px 8px; border-radius: 3px; font-size: 12px;">
                #{{ post.id }}
              </span>
              <span style="color: #666; font-size: 14px;">
                Usuario {{ post.userId }}
              </span>
            </div>
            <h3 style="margin-bottom: 8px;">{{ post.title }}</h3>
            <p style="color: #555;">{{ post.body }}</p>
          </div>
        </div>
      </div>

      <div class="pagination">
        <button @click="goToPage(1)" :disabled="currentPage === 1">
          ⏮ Primera
        </button>
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
          ← Anterior
        </button>

        <div style="display: flex; gap: 5px;">
          <button
            v-for="page in visiblePages"
            :key="page"
            @click="goToPage(page)"
            :style="{
              background: page === currentPage ? '#333' : 'white',
              color: page === currentPage ? 'white' : '#333',
              fontWeight: page === currentPage ? 'bold' : 'normal'
            }"
          >
            {{ page }}
          </button>
        </div>

        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
          Siguiente →
        </button>
        <button @click="goToPage(totalPages)" :disabled="currentPage === totalPages">
          Última ⏭
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Estado
const posts = ref([]);
const loading = ref(true);
const postsPerPage = 10;

// Página actual desde URL
const currentPage = computed(() => {
  const page = parseInt(route.query.page) || 1;
  return Math.max(1, page);
});

// Totales
const totalPosts = computed(() => posts.value.length);
const totalPages = computed(() => Math.ceil(totalPosts.value / postsPerPage));

// Posts de la página actual
const currentPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return posts.value.slice(start, end);
});

// Páginas visibles (máximo 7)
const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const pages = [];
  
  let start = Math.max(1, current - 3);
  let end = Math.min(total, current + 3);
  
  if (current <= 4) end = Math.min(7, total);
  if (current > total - 4) start = Math.max(1, total - 6);
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return pages;
});

// Navegación
function goToPage(page) {
  if (page < 1 || page > totalPages.value) return;
  router.push({ query: { page } });
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

// Validar página
watch(currentPage, (newPage) => {
  if (newPage > totalPages.value && totalPages.value > 0) {
    goToPage(totalPages.value);
  }
});

onMounted(() => {
  loadPosts();
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
  gap: 10px;
  flex-wrap: wrap;
}
</style>
