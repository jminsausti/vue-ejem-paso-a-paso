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
        this.nombre2=this.nombre //Cogemos el valor de la propiedad y lo asignamos a un avariable local para después modificar su contenido en el componente
    },
    data(){
        return{
            nombre2:''
        }
    },
    template: //html
    `<div><h1> {{ nombre }} --- {{nombre2}}</h1><button @click="cambiarProp">Cambiar Prop</button></div>`,
    methods: {
        cambiarProp() {
            //this.nombre = this.nombre.toUpperCase(); No se puede modificar el valor de una propiedad
             this.nombre2 = this.nombre2.toUpperCase();
        }
    }
});

app.mount('main')