// Vue.prototype.$http = axios;  si quiero usar la libreria axios pero con la sintaxis de vue-resource

const vm = {
    setup(){ // Composition API
        const personas = Vue.ref([])
        const sexo = Vue.ref('')

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

        const personasHM = Vue.computed(() => {
            return personas.value.filter((sdg) => sdg.name.title == sexo.value)
        })

        Vue.onMounted(() => {
            cargarPersonas()
        })

        return { personas, sexo, cargarPersonas, personasHM }
    }
};
Vue.createApp(vm).mount('main')
