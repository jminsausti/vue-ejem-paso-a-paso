// Vue.prototype.$http = axios;  si quiero usar la libreria axios pero con la sintaxis de vue-resource

const vm = {
    setup(){ // Composition API
        const personas = Vue.ref([])

        const cargarPersonas = () => {
            /*axios.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => {
                    personas.value = respuesta.data.results;
                });*/
            axios.get('https://randomuser.me/api/?results=50')
                .then((respuesta) => {
                    console.log(respuesta)
                    personas.value = respuesta.data.results // la respuesta viene en data
                })
        }

        Vue.onMounted(() => {
            cargarPersonas()
        })

        return { personas, cargarPersonas }
    }
};
Vue.createApp(vm).mount('main')
