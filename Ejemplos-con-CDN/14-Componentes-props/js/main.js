const app=Vue.createApp({
    data(){
        return{
            autor: '2DW3 - fpTxurdinaga'
        }
    }

})


app.component('autor', {
    props: ['nombre', 'edad'],
    mounted() {
        // Las props son accesibles desde this (proxy)
        // console.log(this.nombre);
        console.log(typeof this.edad);
    },
    data(){
        return{
            nombre2 : ''
        }
    },
    template: //html
    `<div><h1> {{ nombre }} --- {{nombre2}}</h1><button @click="cambiarProp">Cambiar Prop</button></div>`,
    methods: {
        cambiarProp() {
            //this.nombre = this.nombre.toUpperCase(); No se puede modificar el valor de una propiedad
             this.nombre2 = this.nombre.toUpperCase();
        }
    }
});

app.mount('main')