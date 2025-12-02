// Punto de entrada de la aplicación de ejemplo
// Importamos la función para crear la app de Vue
import { createApp } from 'vue'
// Componente raíz de la aplicación
import App from './src/App.vue'
// Router donde definimos las rutas (incluida la ruta con query)
import router from './src/router'

// Creamos la instancia de la aplicación pasando el componente raíz
const app = createApp(App)

// Registramos el router para poder usar <RouterLink>, <RouterView>, useRoute, useRouter, etc.
app.use(router)

// Montamos la app en el div con id="app" definido en index.html
app.mount('#app')
