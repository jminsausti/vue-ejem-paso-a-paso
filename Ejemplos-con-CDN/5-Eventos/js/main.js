//Vuejs 3
const vm={
    setup(){ // Composition API
        const nuevaTarea = Vue.ref(null)
        const tareas = Vue.ref([
            'Aprender Vue.js',
            'Aprender ES6',
            'Hacer la compra',
            'Limpiar el coche'
        ])
        const agregarTarea = () => {
            // Validar que la tarea no esté vacía, eliminar espacios en blanco, 
            const v = (nuevaTarea.value ?? '').toString().trim()
            // Si la tarea está vacía, no hacer nada
            if (!v) return
            // Agregar la nueva tarea al inicio del array
            tareas.value.unshift(v)
            nuevaTarea.value = null
        }
        return { nuevaTarea, tareas, agregarTarea }
    }
}
Vue.createApp(vm).mount('main')
