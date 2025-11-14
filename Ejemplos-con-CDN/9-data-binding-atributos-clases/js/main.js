const vm={
    setup(){ // Composition API
        const styleObject = { color: 'red', fontSize: '23px' }
        const styleObject2 = { color: 'blue', fontSize: '13px' }
        const tareas = Vue.ref([
            {titulo: 'Hacer la compra', completado: false},
            {titulo: 'Aprender Vue.js', completado: true},
            {titulo: 'Aprender Firebase', completado: false},
            {titulo: 'Dominar ES6', completado: false},
            {titulo: 'Salir a correr', completado: false},
        ])
        const fondo = Vue.ref('bg-warning')
        const miclase = Vue.ref('bg-primary')

        const completarTarea = (tarea) => {
            tarea.completado = !tarea.completado
        }

        const tareasCompletadas = Vue.computed(() => {
            return tareas.value.filter((tarea) => tarea.completado)
        }) // propiedad computada que me saca como resultado las tareas completadas

        return { styleObject, styleObject2, tareas, fondo, miclase, completarTarea, tareasCompletadas }
    }
}
Vue.createApp(vm).mount('main')
