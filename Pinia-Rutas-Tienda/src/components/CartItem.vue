<template>
  <!-- Fila de un artículo en el carrito -->
  <div class="cart-item">
    <!-- Imagen del producto -->
    <div class="item-imagen">{{ item.imagen }}</div>
    
    <!-- Información del producto -->
    <div class="item-info">
      <h4>{{ item.nombre }}</h4>
      <p class="item-precio">€{{ item.precio }}</p>
    </div>

    <!-- Controles de cantidad -->
    <div class="item-cantidad">
      <!-- Botón decrementar cantidad -->
      <button @click="decrementarCantidad" class="btn-cantidad">−</button>
      <!-- Mostrar cantidad actual -->
      <span>{{ item.cantidad }}</span>
      <!-- Botón incrementar cantidad -->
      <button @click="incrementarCantidad" class="btn-cantidad">+</button>
    </div>

    <!-- Subtotal (precio × cantidad) -->
    <div class="item-subtotal">
      <p class="subtotal">€{{ (item.precio * item.cantidad).toFixed(2) }}</p>
    </div>

    <!-- Botón para eliminar del carrito -->
    <button @click="eliminarDelCarrito" class="btn-eliminar">🗑️</button>
  </div>
</template>

<!-- Script setup: sintaxis moderna de Composition API -->
<script setup>
import { useCarritoStore } from '../stores/carritoStore'

// Definir la prop 'item' que recibe del componente padre
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

// Obtener la instancia del store de Pinia
const carritoStore = useCarritoStore()

// Función para incrementar la cantidad del producto
const incrementarCantidad = () => {
  carritoStore.incrementarCantidad(props.item.id)
}

// Función para decrementar la cantidad del producto
const decrementarCantidad = () => {
  carritoStore.decrementarCantidad(props.item.id)
}

// Función para eliminar el producto del carrito
const eliminarDelCarrito = () => {
  carritoStore.eliminarDelCarrito(props.item.id)
}
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.item-imagen {
  font-size: 2.5rem;
  min-width: 60px;
  text-align: center;
}

.item-info {
  flex: 1;
}

.item-info h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.item-precio {
  margin: 0;
  color: #667eea;
  font-weight: bold;
}

.item-cantidad {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.btn-cantidad {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  min-width: 30px;
  font-weight: bold;
  color: #667eea;
  transition: transform 0.2s;
}

.btn-cantidad:hover {
  transform: scale(1.2);
}

.item-subtotal {
  min-width: 100px;
  text-align: right;
}

.subtotal {
  margin: 0;
  font-size: 1.3rem;
  color: #764ba2;
  font-weight: bold;
}

.btn-eliminar {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  transition: transform 0.2s;
}

.btn-eliminar:hover {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .cart-item {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .item-cantidad {
    order: 4;
    width: 100%;
  }

  .item-subtotal {
    order: 5;
    width: 100%;
    text-align: left;
  }

  .btn-eliminar {
    order: 6;
  }
}
</style>
