import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../Views/HomeView.vue'    
import AboutView from '../Views/AboutView.vue'
import CursosView from '../Views/CursosView.vue'
import InfoCursoView from '../Views/InfoCursoView.vue'

const routes =   [
        {  path: '/', name: 'home', component: HomeView, },
        {  path: '/cursos', name: 'cursos', component: CursosView },
        {  path: '/cursos/:id', name: 'info-curso', component: InfoCursoView },
        {  path: '/about', name: 'about', component: AboutView }
    ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

export default router