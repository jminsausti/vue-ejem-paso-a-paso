
<template>
    <h1>Sección BLOG</h1>
    
    <ul>
        
        <li>
 <!-- Genera un enlace de enrutador que redirige a una página de publicación con el parámetro de ID establecido en 1. -->
            <RouterLink :to="{ name: 'post', params:{id:1} }">Post 1</RouterLink>
        </li>
        <li>
            <RouterLink :to="{ name: 'post', params:{id:2} }">Post 2</RouterLink>
        </li>
        <li>
            <RouterLink :to="{ name: 'post', params:{id:3} }">Post 3</RouterLink>
        </li>
        <li>
            <RouterLink :to="{ name: 'post', params:{id:4} }">Post 4</RouterLink>
        </li>
        <li>
            <RouterLink :to="{ name: 'post', params:{id:5} }">Post 5</RouterLink>
        </li>
    </ul>
</template>