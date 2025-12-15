// Importar la función principal de Vue 3
import { createApp } from 'vue'
// Importar Pinia para el manejo del estado
import { createPinia } from 'pinia'
// Importar el componente raíz de la aplicación
import App from './App.vue'
// Importar la configuración del router
import router from './router'

// Crear la instancia de la aplicación Vue
const app = createApp(App)

// Registrar Pinia en la aplicación
// Pinia es un sistema de gestión del estado global (state management)
app.use(createPinia())

// Registrar Vue Router en la aplicación
// Vue Router maneja la navegación entre las diferentes vistas
app.use(router)

// Montar la aplicación en el elemento HTML con id='app'
app.mount('#app')
