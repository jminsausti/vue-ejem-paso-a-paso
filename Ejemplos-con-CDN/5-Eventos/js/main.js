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
            const v = (nuevaTarea.value ?? '').toString().trim()
            if (!v) return
            tareas.value.unshift(v)
            nuevaTarea.value = null
        }
        return { nuevaTarea, tareas, agregarTarea }
    }
}
Vue.createApp(vm).mount('main')
