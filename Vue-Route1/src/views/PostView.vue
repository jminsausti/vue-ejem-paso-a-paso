<template>
    <h1>Post View del elemento {{ postId }}</h1>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute} from 'vue-router';

let postId = ref('');

onMounted(()=>{

//  Código para obtener el ID del parámetro de ruta y asignarlo a la variable postId.
 
    const route = useRoute();
    postId.value =  route.params.id
})
</script>