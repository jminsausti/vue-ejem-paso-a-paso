
<template>
  <div class="home">
    <div class="contador">
      {{contador}}
    </div>
    <div class="botones">
      <button @click="decrementar">-</button>
      <button @click="incrementar">+</button>
    </div>
    <hr>
    <div>
      EL numero mostrado es: {{parImpar}}
    </div>
  </div>
</template>

<script>
//Se están importando las funciones mapState y mapActions de Pinia, que se utilizan para mapear las propiedades del estado y las acciones de un store en las propiedades computadas y métodos de un componente.
import { mapState, mapActions } from 'pinia'
import {useCounterStore} from '@/stores/counter'
export default{
  computed:{
    //En esta sección se utiliza mapState para mapear las propiedades del estado del store useCounterStore en las propiedades computadas del componente. En este caso, se están mapeando las propiedades contador y parImpar del store al componente.
    ...mapState(useCounterStore, ['contador','parImpar'])
  },
  methods:{
    //En esta sección se utiliza mapActions para mapear las acciones del store useCounterStore en los métodos del componente. Se están mapeando las acciones incrementar y decrementar.
    ...mapActions(useCounterStore,['incrementar', 'decrementar'])
  },
}
</script>

<style>
.contador{
  font-size: 60px;
  margin: 20px
}
.botones button{
  font-size: 40px;
  margin: 20px
}
</style>