import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // Estado reactivo
  const contador = ref(5)
  
  // Getters (propiedades computadas)
  const parImpar = computed(() => {
    return contador.value % 2 === 0 ? 'PAR' : 'IMPAR'
  })

  // Acciones (métodos)
  function incrementar() {
    contador.value++
  }
  
  function decrementar() {
    contador.value--
  }

  return {
    // Estado
    contador,
    
    // Getters
    parImpar,
    
    // Acciones
    incrementar,
    decrementar
  }
})
