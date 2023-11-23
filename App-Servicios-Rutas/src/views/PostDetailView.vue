<template>
    <h1>Post Detail {{ post.id }}</h1>
    <div class="post-container">
        <div class="post-card">
            <h3>{{ post.title }}</h3>
            <h3>{{ post.body }}</h3>
        </div>
        <RouterLink :to="{name:'PostList'}" class="link">Back</RouterLink>
    </div>
</template>

<script setup>
    import { RouterLink, useRoute } from 'vue-router';
    import { onMounted } from 'vue';
    import { PostServicio } from '../servicios/PostServicio';
    
    const servicio = new PostServicio();
    const  post  = servicio.post;
    onMounted(async () => {
        const route = useRoute();
        const id = route.params.id;
        await servicio.fetchById(id);
    });    

</script>
<style scoped>
    .post-container {
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .post-card{ 
        padding: 20px;
        width: 750px;
        border-radius: 15px;
        border: 1px solid #ccc;
    }
    .link{
        margin-top: 25px;
        color: #da6d6d;
        text-decoration: none;
    }
    .link:hover{
        color: #000;
        text-decoration: underline;
    }
    .post-card h3{
        margin-top: 20px;

    }
</style>