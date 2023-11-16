<template>
    <div class="post">
        <!-- <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique illum quod praesentium, nulla excepturi vitae saepe quos eum illo accusamus, iure qui earum consequatur, sit doloribus sint ab accusantium?</p> -->
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
    </div>
</template>

<script> 
    export default{
        name: 'PostDetailOption',
        components: {},
        props:[ 'title', 'content'], 
        data(){
            
        },
        mounted(){
        },
        methods:{
            
        }
    }
</script>

<style>

</style>