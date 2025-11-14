const app = Vue.createApp({
    setup(){
        const nombre = Vue.ref('John')
        const apellido = Vue.ref('Johnson')
        return { nombre, apellido }
    }
})
    
app.component('Saludo',{
    props: ['nombre'],
    setup(){ // en un componente el elemento data es una funcion que devuelve los datos que queramos
        const saludo = Vue.ref('DATA DEL COMPONENTE')
        return { saludo, nombre }
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

app.component('Contador',{
    setup(){
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
}),



app.mount('#app')
