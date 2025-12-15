import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Define el store con Pinia
export const useCarritoStore = defineStore('carrito', () => {
  // ============================================
  // ESTADO (ref reactivos)
  // ============================================
  
  // Lista de productos disponibles (simulada)
  const productos = ref([
    { id: 1, nombre: 'Laptop', precio: 999, imagen: '💻' },
    { id: 2, nombre: 'Mouse', precio: 25, imagen: '🖱️' },
    { id: 3, nombre: 'Teclado', precio: 75, imagen: '⌨️' },
    { id: 4, nombre: 'Monitor', precio: 300, imagen: '🖥️' },
    { id: 5, nombre: 'Webcam', precio: 60, imagen: '📷' },
    { id: 6, nombre: 'Auriculares', precio: 120, imagen: '🎧' }
  ])

  // Array del carrito de compras actual
  const carrito = ref([])

  // Historial de compras realizadas
  const historial = ref([])

  // ============================================
  // GETTERS (propiedades calculadas)
  // ============================================

  // Total de items en el carrito
  const totalItems = computed(() => {
    return carrito.value.reduce((total, item) => total + item.cantidad, 0)
  })

  // Total del precio del carrito
  const totalPrecio = computed(() => {
    return carrito.value.reduce((total, item) => total + (item.precio * item.cantidad), 0)
  })

  // ============================================
  // ACCIONES (métodos que modifican el estado)
  // ============================================

  /**
   * Agregar un producto al carrito
   * @param {Object} producto - El producto a agregar
   */
  function agregarAlCarrito(producto) {
    // Verificar si el producto ya está en el carrito
    const itemExistente = carrito.value.find(item => item.id === producto.id)

    if (itemExistente) {
      // Si existe, incrementar la cantidad
      itemExistente.cantidad++
    } else {
      // Si no existe, agregarlo con cantidad 1
      carrito.value.push({
        ...producto,
        cantidad: 1
      })
    }
  }

  /**
   * Eliminar un producto del carrito
   * @param {Number} productoId - El ID del producto a eliminar
   */
  function eliminarDelCarrito(productoId) {
    carrito.value = carrito.value.filter(item => item.id !== productoId)
  }

  /**
   * Aumentar la cantidad de un producto en el carrito
   * @param {Number} productoId - El ID del producto
   */
  function incrementarCantidad(productoId) {
    const item = carrito.value.find(item => item.id === productoId)
    if (item) {
      item.cantidad++
    }
  }

  /**
   * Disminuir la cantidad de un producto en el carrito
   * @param {Number} productoId - El ID del producto
   */
  function decrementarCantidad(productoId) {
    const item = carrito.value.find(item => item.id === productoId)
    if (item && item.cantidad > 1) {
      item.cantidad--
    } else if (item && item.cantidad === 1) {
      eliminarDelCarrito(productoId)
    }
  }

  /**
   * Procesar la compra: mover carrito al historial y vaciar
   */
  function procesarCompra() {
    if (carrito.value.length === 0) return

    // Crear un registro de compra con timestamp
    const compra = {
      id: Date.now(),
      fecha: new Date().toLocaleDateString('es-ES'),
      items: JSON.parse(JSON.stringify(carrito.value)), // Copiar deep
      total: totalPrecio.value
    }

    // Agregar al historial
    historial.value.push(compra)

    // Vaciar el carrito
    vaciarCarrito()
  }

  /**
   * Vaciar el carrito
   */
  function vaciarCarrito() {
    carrito.value = []
  }

  // ============================================
  // RETORNAR STATE, GETTERS Y ACTIONS
  // ============================================
  return {
    // State
    productos,
    carrito,
    historial,

    // Getters
    totalItems,
    totalPrecio,

    // Actions
    agregarAlCarrito,
    eliminarDelCarrito,
    incrementarCantidad,
    decrementarCantidad,
    procesarCompra,
    vaciarCarrito
  }
})
