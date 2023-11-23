import { createRouter, createWebHistory } from 'vue-router'
import PostListView from '../views/PostListView.vue'
import PostDetailView from '../views/postDetailView.vue'


const routes=[
    {
        /* En una aplicacion siempre tiene que haber un elemento raiz.
        Si en nuestro elemento raiz no hay ninguna vista y queremos redireccionar a otra vista lo hacemos de la siguiente manera*/
        path: '/',
        // redirect: '/post', //podemos redireccionar a partir del path
        redirect : {name : 'PostList'} //pero siempre es más recomendable redireccionar por el name
        // redirect : to =>{ return {name:'PostList'}} //pero siempre es más recomendable redireccionar por el name

    },
    {
        path: '/post',
        name: 'PostList',
        component: PostListView
    },
    {
        path: '/post/:id',
        name: 'PostDetail',
        component : PostDetailView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router