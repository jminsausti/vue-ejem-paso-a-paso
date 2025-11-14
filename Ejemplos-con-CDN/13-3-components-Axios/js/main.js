const app = Vue.createApp({
    setup(){ // Composition API
        const tareasAjax = Vue.ref([])
        const tareasLocales = Vue.ref([
            { title: 'Hacer los deberes'},
            { title: 'Aprender Vue'},
            { title: 'Hacer los ejercicios'}
        ])

        Vue.onMounted(() => {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then((respuesta) => {
                    tareasAjax.value = respuesta.data
                })
        })

        return { tareasAjax, tareasLocales }
    }
})

//En este componente usamos los datos que están en la instancia principal, por eso necesita props
app.component('Mistareas', {
    props: ['tareas'],
    template: //html 
    `<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>`,
    
});

/*Este componente es totalmente independiente, usa los datos de su propio data, 
eso si hay que recogerlos datos como si fuese un return de la funcion data()
*/
app.component('Otrastareas', {
    template: //html
    `<div>
            <ul><li v-for="persona in personas">{{ persona.name.first}}</li></ul>
            <img v-for="persona in personas" v-bind:src='persona.picture.thumbnail'>
    </div>`,
    setup(){ // Composition API
        const personas = Vue.ref([])
        Vue.onMounted(() => {
            axios.get('https://randomuser.me/api/?results=5')
                .then((respuesta) => {
                    console.log(respuesta)
                    personas.value = respuesta.data.results // la respuesta viene en data
                })
        })
        return { personas }
    }
});

app.mount('main')