<template>
  <div class="carrito-container">
    <h1>🛒 Carrito de Compras</h1>

    <!-- Estado 1: Carrito vacío -->
    <!-- v-if: renderiza solo si la condición es true -->
    <div v-if="carritoStore.carrito.length === 0" class="empty-carrito">
      <p class="emoji">🛒</p>
      <p class="mensaje">Tu carrito está vacío</p>
      <!-- RouterLink: navegación a otra ruta -->
      <RouterLink to="/productos" class="btn-continuar">
        Continuar comprando
      </RouterLink>
    </div>

    <!-- Estado 2: Carrito con items -->
    <!-- v-else: se renderiza cuando la condición anterior es false -->
    <div v-else class="carrito-content">
      <!-- Sección de items en el carrito -->
      <div class="items-section">
        <h2>Items del Carrito</h2>
        <!-- v-for: itera sobre cada item del carrito -->
        <CartItem 
          v-for="item in carritoStore.carrito"
          :key="item.id"
          :item="item"
        />
      </div>

      <!-- Sección resumen de compra (precios y botones) -->
      <div class="resumen-section">
        <div class="resumen-card">
          <h2>Resumen</h2>
          
          <!-- Mostrar cantidad total de items -->
          <div class="resumen-item">
            <span>Cantidad de items:</span>
            <strong>{{ carritoStore.totalItems }}</strong>
          </div>

          <!-- Mostrar precio total -->
          <div class="resumen-item">
            <span>Total:</span>
            <strong class="total">€{{ carritoStore.totalPrecio.toFixed(2) }}</strong>
          </div>

          <!-- Botón para procesar la compra -->
          <button @click="procesarCompra" class="btn-comprar">
            Procesar Compra 💳
          </button>

          <!-- Botón para vaciar el carrito -->
          <button @click="vaciarCarrito" class="btn-vaciar">
            Vaciar Carrito 🗑️
          </button>

          <!-- Link para continuar comprando -->
          <RouterLink to="/productos" class="btn-continuar">
            Continuar comprando
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Mensaje de confirmación de compra -->
    <!-- v-if: aparece después de procesar una compra -->
    <div v-if="compraConfirmada" class="confirmacion">
      <h3>✅ ¡Compra realizada correctamente!</h3>
      <p>Total: €{{ totalCompra.toFixed(2) }}</p>
    </div>
  </div>
</template>

<!-- Script setup: Composition API -->
<script setup>
// Importar ref para variables reactivas
import { ref } from 'vue'
// Importar componente CartItem
import CartItem from '../components/CartItem.vue'
// Importar el store de Pinia
import { useCarritoStore } from '../stores/carritoStore'
// Importar useRouter para navegar entre rutas
import { useRouter } from 'vue-router'

// Instancia del store
const carritoStore = useCarritoStore()
// Hook de Vue Router para navegar
const router = useRouter()

// Variables reactivas locales
const compraConfirmada = ref(false)  // Controla visibilidad del mensaje de confirmación
const totalCompra = ref(0)           // Almacena el total de la compra

// Función ejecutada cuando se hace clic en "Procesar Compra"
const procesarCompra = () => {
  // Guardar el total antes de vaciar el carrito
  totalCompra.value = carritoStore.totalPrecio
  // Llamar a la acción del store que procesa la compra
  carritoStore.procesarCompra()
  // Mostrar mensaje de confirmación
  compraConfirmada.value = true

  // Ocultar mensaje después de 3 segundos y redirigir al historial
  setTimeout(() => {
    compraConfirmada.value = false
    router.push('/historial')
  }, 3000)
}

// Función para vaciar el carrito (con confirmación)
const vaciarCarrito = () => {
  // Pedir confirmación al usuario antes de vaciar
  if (confirm('¿Está seguro de que desea vaciar el carrito?')) {
    carritoStore.vaciarCarrito()
  }
}
</script>

<style scoped>
.carrito-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 20px;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

.empty-carrito {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.empty-carrito .emoji {
  font-size: 3rem;
  margin: 0;
}

.empty-carrito .mensaje {
  font-size: 1.3rem;
  color: #999;
  margin: 1rem 0 2rem 0;
}

.carrito-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
}

.items-section h2 {
  color: #333;
  margin-top: 0;
}

.resumen-section {
  height: fit-content;
  position: sticky;
  top: 20px;
}

.resumen-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.resumen-card h2 {
  margin-top: 0;
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 1rem;
}

.resumen-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  color: #666;
  border-bottom: 1px solid #eee;
}

.resumen-item strong {
  color: #333;
}

.total {
  color: #764ba2 !important;
  font-size: 1.3rem;
}

.btn-comprar,
.btn-vaciar,
.btn-continuar {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  display: block;
  transition: opacity 0.3s;
}

.btn-comprar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-comprar:hover {
  opacity: 0.9;
}

.btn-vaciar {
  background: #ff6b6b;
  color: white;
}

.btn-vaciar:hover {
  opacity: 0.9;
}

.btn-continuar {
  background: #f5f5f5;
  color: #333;
}

.btn-continuar:hover {
  background: #e0e0e0;
}

.confirmacion {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1000;
}

.confirmacion h3 {
  color: #28a745;
  margin: 0 0 1rem 0;
}

.confirmacion p {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
}

@media (max-width: 768px) {
  .carrito-content {
    grid-template-columns: 1fr;
  }

  .resumen-section {
    position: static;
  }
}
</style>
