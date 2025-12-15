<template>
  <!-- Tarjeta de producto individual -->
  <div class="product-card">
    <!-- Área de imagen del producto -->
    <div class="product-imagen">
      {{ producto.imagen }}
    </div>
    
    <!-- Información del producto -->
    <div class="product-info">
      <!-- Nombre del producto -->
      <h3>{{ producto.nombre }}</h3>
      
      <!-- Precio del producto -->
      <p class="precio">€{{ producto.precio }}</p>
      
      <!-- Botón para agregar al carrito con evento click -->
      <button 
        @click="agregarAlCarrito" 
        class="btn-agregar"
      >
        Agregar al carrito
      </button>
    </div>
  </div>
</template>

<!-- Script setup: sintaxis moderna de Composition API -->
<script setup>
// Importamos el store de Pinia para manejar el estado del carrito
import { useCarritoStore } from '../stores/carritoStore'

// Definimos la prop 'producto' que recibe este componente del padre
// Las props son datos que vienen del componente padre
const props = defineProps({
  producto: {
    type: Object,      // Tipo de dato esperado
    required: true     // Este dato es obligatorio
  }
})

// Obtenemos la instancia del store de Pinia
// Esto nos permite acceder a las acciones y el estado del carrito
const carritoStore = useCarritoStore()

// Función que se ejecuta cuando el usuario hace clic en "Agregar al carrito"
const agregarAlCarrito = () => {
  // Llamamos a la acción 'agregarAlCarrito' del store
  // Pasamos el objeto producto como parámetro
  carritoStore.agregarAlCarrito(props.producto)
}
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-imagen {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
  text-align: center;
  font-size: 4rem;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.1rem;
}

.precio {
  font-size: 1.5rem;
  color: #667eea;
  font-weight: bold;
  margin: 0.5rem 0 1rem 0;
}

.btn-agregar {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.3s;
}

.btn-agregar:hover {
  opacity: 0.9;
}

.btn-agregar:active {
  transform: scale(0.98);
}
</style>
