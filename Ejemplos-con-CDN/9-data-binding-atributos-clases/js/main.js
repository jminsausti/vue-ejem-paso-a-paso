const vm={
   
    data() {
        return{
            
            tareas: [
                {titulo: 'Hacer la compra', completado: false},
                {titulo: 'Aprender Vue.js', completado: true},
                {titulo: 'Aprender Firebase', completado: false},
                {titulo: 'Dominar ES6', completado: false},
                {titulo: 'Salir a correr', completado: false},
            ],
            fondo: 'bg-warning',
            miclase: 'bg-primary'
        }
        
    },
    methods: {
        completarTarea(tarea) {
            tarea.completado = !tarea.completado;
        }
    },
    computed: { // propiedad computada que me saca como resultado las tareas completadas
        tareasCompletadas() {
            return this.tareas.filter((tarea) => tarea.completado);
        }
    }
}
Vue.createApp(vm).mount('main')
