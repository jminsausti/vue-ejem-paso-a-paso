//Vuejs 3
const vm = {
    setup(){ // Composition API
        const laborales = Vue.ref(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'])
        const tareas = Vue.ref([
            {nombre: 'Hacer la compra', prioridad: 'baja'},
            {nombre: 'Aprender Vue', prioridad: 'alta'},
            {nombre: 'Ir al gimnasio', prioridad: 'baja'},
        ])
        const persona = Vue.reactive({
            nombre: 'Txomin',
            profesion: 'dev',
            ciudad: 'Bilbao'
        })
        return { laborales, tareas, persona }
    }
};

Vue.createApp(vm).mount('main')