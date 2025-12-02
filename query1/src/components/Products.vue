<!-- src/components/Products.vue -->
<template>
  <div>
    <h1>Productos</h1>
    <p v-if="category">Categoría: {{ category }}</p>
    <p v-else>No se ha especificado una categoría.</p>

    <div>
      <button @click="changeCategory(null)">Todas</button>
      <button @click="changeCategory('electronics')">Electrónica</button>
      <button @click="changeCategory('furniture')">Muebles</button>
    </div>

    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Accedemos al objeto `route` para obtener los parámetros de consulta
const route = useRoute();
const router = useRouter();

// Utilizamos una propiedad computada para obtener el valor de la query "category"
const category = computed(() => route.query.category || null);

// Simulamos una lista de productos
const products = [
  { id: 1, name: 'Laptop', category: 'electronics' },
  { id: 2, name: 'Smartphone', category: 'electronics' },
  { id: 3, name: 'Sofa', category: 'furniture' },
  { id: 4, name: 'Table', category: 'furniture' },
];

// Filtramos los productos según la categoría seleccionada en la query
const filteredProducts = computed(() => {
  if (category.value) {
    return products.filter(product => product.category === category.value);
  }
  return products;
});

const changeCategory = (newCategory) => {
  if (!newCategory) {
    router.push({ name: 'Products', query: {} });
    return;
  }
  router.push({
    name: 'Products',
    query: { category: newCategory },
  });
};
</script>

<style scoped>
/* Estilos para los productos */
</style>
