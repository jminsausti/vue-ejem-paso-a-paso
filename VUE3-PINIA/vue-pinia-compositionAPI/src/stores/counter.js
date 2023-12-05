import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const s = defineStore('counter', {
  state: () => ({ 
    contador:5
  }),
  getters:{
    parImpar(state){
      if (state.contador % 2===0) 
        return "PAR"
      return "IMPAR"
    }
  },
  actions:{
    incrementar(){
      this.contador++;
    },
    decrementar(){
      this.contador--;
    }
  }
})