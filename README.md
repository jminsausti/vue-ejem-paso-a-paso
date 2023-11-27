# En este ejemplo utilizamos PINIA
### Tenemos el mismo ejemplo hecho con Options API y con Composition API  

En PINIA se consideran 3 elementos
1. **state**: es donde se definen todas las variables que utilizaremos en el app
2. **getters**: son exactamente el equivalente a las propiedades computadas para el estado de un store
3. **actions**: son el equivalente a los métodos en elos componentes

### Ejemplo de creación de un store
```js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
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
```