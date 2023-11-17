// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


const app=createApp(App)

app.directive('fontSize',{
    beforeMount: (el, binding) =>{//se aplica la directiva personalizada antes de motarse la instancia
        el.style.fontSize = '50px'
    }
})

app.directive('customSize',{
    beforeMount:(el, binding) =>{//ahora aplicamos la directiva en función de lo qu se especifica en el Componente
        el.style.fontSize = binding.value + "px"
    }
})

app.mount('#app')



