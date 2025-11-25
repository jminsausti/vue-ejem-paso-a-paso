const app = Vue.createApp({
    setup(){
        const nombre = Vue.ref('Jose')
        const apellido = Vue.ref('Vuejs')
        return { nombre, apellido }
    }
})
    
app.component('Saludo',{//saludo es el nombre del componente
    props: ['nombre'], //nombre es el nombre del prop. este es un dato que recibo desde el padre
    setup(props){ // 
        const saludo = Vue.ref('esto es una var del COMPONENTE')
        return { saludo, nombre: props.nombre }
    }, 
    template: //html
    `   
        <!--para que me pinte las et html, instalo es6-string-html, y luego tengo que indicar junto a template html-->
        <!--como tengo más de un elemento los tengo que envolver en un div-->
        <div>
            <h1>Saludo de forma statica dentro Componente 'Saludo' </h1>
            <h3> {{ saludo }} </h3>
            <h3>{{ nombre }}</h3>
        </div>
    `,
    
})

app.component('Contador',{//contador es el nombre del componente
    setup(){//este componente no recibe ninguna variable, por lo que no se declaran las props
        const numero = Vue.ref(0)
        return { numero }
    },
    template: //html
    `
        <div>
            <h3>{{numero}}</h3>
            <button @click="numero++">+</button>
        </div>

    `
});



app.mount('#app')
