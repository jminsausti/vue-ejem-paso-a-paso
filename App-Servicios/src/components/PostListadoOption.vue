<template>
    <ul>
        <li v-for="post in posts" :key="post.id">
            {{ post.title }}
        </li>
    </ul>
</template>

<script>
    import { PostServicio } from '@/servicios/PostServicio'
    export default{
        name: 'PostListOption',
        components: {},
        data(){
            const service = new PostServicio();
            const posts = service.posts;
            return {
                service, posts
            }
        },
        async mounted() {
            
            await this.service.fetchAll();
        },
        methods:{
            
        },
        computed:{
            
        }
    }
</script>


<style scoped>
</style>