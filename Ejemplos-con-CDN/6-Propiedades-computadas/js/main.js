const vm ={
    setup(){ // Composition API
        const mensaje = Vue.ref('Hola Mundo :) !')
        const nuevaTarea = Vue.ref(null)
        const tareas = Vue.ref([
            {
                titulo: 'Aprender Vue.js',
                prioridad: true,
                antiguedad: 23
            },
            {
                titulo: 'Aprender ES6',
                prioridad: false,
                antiguedad: 135
            },
            {
                titulo: 'Hacer la compra',
                prioridad: true,
                antiguedad: 378
            },
            {
                titulo: 'Limpiar el coche',
                prioridad: true,
                antiguedad: 250
            }
        ])

        const agregarTarea = () => {
            const v = (nuevaTarea.value ?? '').toString().trim()
            if (!v) return
            tareas.value.unshift({
                titulo: v,
                prioridad: false,
                antiguedad: 0,
            })
            nuevaTarea.value = null
        }

        const mensajeAlReves = Vue.computed(() => {
            return mensaje.value.split('').reverse().join('');
        })

        const tareasConPrioridad = Vue.computed(() => {
            return tareas.value.filter(function(tarea){
                return tarea.prioridad;
            });
            // return this.tareas.filter((tarea) => tarea.prioridad);
        })

        const tareasPorAntiguedad = Vue.computed(() => {
             // Devolver una copia ordenada para no mutar el estado original
            return [...tareas.value].sort((a, b) => b.antiguedad - a.antiguedad)
        })

        return { mensaje, nuevaTarea, tareas, agregarTarea, mensajeAlReves, tareasConPrioridad, tareasPorAntiguedad }
    }
}
Vue.createApp(vm).mount('main')