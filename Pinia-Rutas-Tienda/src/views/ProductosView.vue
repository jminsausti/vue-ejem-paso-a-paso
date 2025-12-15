<template>
  <div class="productos-container">
    <!-- Título de la página -->
    <h1>📦 Catálogo de Productos</h1>
    <p class="subtitle">Selecciona los productos que deseas comprar</p>

    <!-- Grid de productos -->
    <!-- v-for: directiva para iterar sobre cada producto del store -->
    <!-- :key: identificador único para cada elemento (necesario para Vue)-->
    <!-- :producto: prop que pasamos al componente hijo ProductCard -->
    <div class="productos-grid">
      <ProductCard 
        v-for="producto in carritoStore.productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>

    <!-- Mensaje si no hay productos (v-if: renderiza si la condición es true) -->
    <div v-if="carritoStore.productos.length === 0" class="empty-state">
      <p>No hay productos disponibles</p>
    </div>
  </div>
</template>

<!-- Script setup: Composition API -->
<script setup>
// Importar el componente ProductCard
import ProductCard from '../components/ProductCard.vue'
// Importar el store de Pinia
import { useCarritoStore } from '../stores/carritoStore'

// Instancia del store - accedemos a productos desde aquí
const carritoStore = useCarritoStore()
</script>

<style scoped>
.productos-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 20px;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #999;
}

@media (max-width: 768px) {
  .productos-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .productos-container {
    padding: 1rem 10px;
  }
}
</style>
