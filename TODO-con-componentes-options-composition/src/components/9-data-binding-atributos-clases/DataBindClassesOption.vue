<template>

    <div   :class="['p-3','text-white', fondo]"><!--Aquí utilizo un valor classtradicional y un valor class bindeado mediante un array a vuejs,
            donde hay dos valores estáticos (cuidado como están bindeados se ponen entre comas)
            y uno enlazado con la variable fondo declarada en el data-->    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus inventore at nobis cupiditate quo fuga aperiam vel officiis. Ad aliquam est vitae sint, explicabo architecto ducimus blanditiis a quaerat.  
            </p>
        </div>


        <h1>Tareas</h1>


        <h2>{{ tareasCompletadas.length }} completadas</h2>
        
        <!-- En este 2º caso asociamos la clase completado en caso de que la tarea esté completada -->
        <ul>
            <li v-for="tarea in tareas" :style="(tarea.completado) ?  styleObject : styleObject2"
                @click="completarTarea(tarea)"
                v-bind:class="[{completado: tarea.completado}, miclase]">
                {{ tarea.titulo }}
            </li>
        </ul>
        <p :style="styleObject">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum enim eius dolor pariatur! Beatae odio ratione magni, at iste enim asperiores tempora deserunt veritatis nobis, eveniet modi voluptatibus ex suscipit?</p>
</template>

<script>
    export default{
        name: 'DataBindClassesOption',
        components: {},
        data(){
            return{
                styleObject: {
                color: 'red',
                fontSize: '23px'
              },
              styleObject2: {
                color: 'blue',
                fontSize: '13px'
              },
                tareas: [
                        {titulo: 'Hacer la compra', completado: false},
                        {titulo: 'Aprender Vue.js', completado: false},
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
</script>

<style>
li {
    cursor: pointer;
}
.completado {
    text-decoration: line-through;
}
</style>