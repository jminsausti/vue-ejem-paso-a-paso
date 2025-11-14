const app = Vue.createApp({
    setup(){
        const autor = Vue.ref('2DW3 - fpTxurdinaga')
        return { autor }
    }
})

app.component('autor', {
    props: ['nombre', 'edad'],
    setup(props){
        // Las props son accesibles aquí como 'props'
        const nombre2 = Vue.ref('')
        const cambiarProp = () => {
            // No se puede modificar la prop; usamos estado local derivado
            nombre2.value = (props.nombre || '').toString().toUpperCase()
        }
        Vue.onMounted(() => {
            console.log(typeof props.edad)
        })
        return { nombre2, cambiarProp }
    },
    template: //html
    `<div><h1> {{ nombre }} --- {{nombre2}}</h1><button @click="cambiarProp">Cambiar Prop</button></div>`,
});

app.mount('main')