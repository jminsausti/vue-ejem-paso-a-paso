<template> 
    <h1>Hola Mundo</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            {{ post.title }}
        </li>
    </ul>
</template>

<script setup>

    import { PostServicio } from '../servicios/PostServicioComposition.js'
    import { onMounted} from 'vue'
    const service = new PostServicio();
    const posts = service.posts; //Importante aquí estamos llamando al getter, y como hemos seguido la nomenclatura de getters y setters 
    
    onMounted(async ()=>{//al montar la instancia llamamos al servicio para que recoja los datos
        await service.fetchAll();
    })

</script>

<style scoped>
.post-list{
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none;
    }
    .post-list li{
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc
    }
</style>