<template>
  <div class="historial-container">
    <h1>📋 Historial de Compras</h1>

    <!-- Estado 1: Sin compras realizadas -->
    <div v-if="carritoStore.historial.length === 0" class="empty-historial">
      <p class="emoji">📋</p>
      <p class="mensaje">No hay compras realizadas aún</p>
      <!-- Link para ir a hacer la primera compra -->
      <RouterLink to="/productos" class="btn-comprar">
        Realiza tu primera compra
      </RouterLink>
    </div>

    <!-- Estado 2: Mostrar todas las compras realizadas -->
    <div v-else class="compras-list">
      <!-- v-for: itera sobre cada compra del historial -->
      <div 
        v-for="compra in carritoStore.historial"
        :key="compra.id"
        class="compra-card"
      >
        <!-- Encabezado de la compra con ID, fecha y total -->
        <div class="compra-header">
          <div>
            <h3>Compra #{{ compra.id }}</h3>
            <p class="fecha">📅 {{ compra.fecha }}</p>
          </div>
          <div class="compra-total">
            <p class="label">Total</p>
            <p class="precio">€{{ compra.total.toFixed(2) }}</p>
          </div>
        </div>

        <!-- Detalle de items comprados en esta compra -->
        <div class="compra-items">
          <h4>Items comprados:</h4>
          <!-- v-for: itera sobre los items de esta compra -->
          <ul>
            <li v-for="item in compra.items" :key="item.id" class="item-historial">
              <span class="item-emoji">{{ item.imagen }}</span>
              <span class="item-nombre">{{ item.nombre }}</span>
              <span class="item-cantidad">x{{ item.cantidad }}</span>
              <span class="item-precio">€{{ (item.precio * item.cantidad).toFixed(2) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Botón para realizar otra compra (solo si hay historial) -->
    <div v-if="carritoStore.historial.length > 0" class="action-buttons">
      <RouterLink to="/productos" class="btn-comprar">
        Realizar otra compra
      </RouterLink>
    </div>
  </div>
</template>

<!-- Script setup: Composition API -->
<script setup>
// Importar el store de Pinia
import { useCarritoStore } from '../stores/carritoStore'

// Instancia del store para acceder al historial
const carritoStore = useCarritoStore()
</script>

<style scoped>
.historial-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 20px;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

.empty-historial {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.empty-historial .emoji {
  font-size: 3rem;
  margin: 0;
}

.empty-historial .mensaje {
  font-size: 1.3rem;
  color: #999;
  margin: 1rem 0 2rem 0;
}

.compras-list {
  display: grid;
  gap: 1.5rem;
}

.compra-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.compra-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-bottom: 2px solid #667eea;
}

.compra-header h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.fecha {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.compra-total {
  text-align: right;
}

.compra-total .label {
  margin: 0 0 0.5rem 0;
  color: #666;
  font-size: 0.9rem;
}

.compra-total .precio {
  margin: 0;
  font-size: 1.8rem;
  color: #764ba2;
  font-weight: bold;
}

.compra-items {
  padding: 1.5rem;
}

.compra-items h4 {
  margin: 0 0 1rem 0;
  color: #333;
}

.compra-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item-historial {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
  gap: 1rem;
}

.item-historial:last-child {
  border-bottom: none;
}

.item-emoji {
  font-size: 1.5rem;
  min-width: 30px;
  text-align: center;
}

.item-nombre {
  flex: 1;
  color: #333;
  font-weight: 500;
}

.item-cantidad {
  color: #666;
  min-width: 40px;
  text-align: center;
}

.item-precio {
  color: #667eea;
  font-weight: bold;
  min-width: 80px;
  text-align: right;
}

.action-buttons {
  text-align: center;
  margin-top: 2rem;
}

.btn-comprar {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: opacity 0.3s;
}

.btn-comprar:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .compra-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .compra-total {
    text-align: left;
  }

  .item-historial {
    flex-wrap: wrap;
  }

  .item-cantidad {
    order: 3;
  }

  .item-precio {
    order: 4;
  }
}
</style>
