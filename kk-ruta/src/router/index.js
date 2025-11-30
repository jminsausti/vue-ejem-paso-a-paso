import { createRouter, createWebHistory } from 'vue-router';

// Importar vistas principales
import HomeView from '../views/HomeView.vue';
import AlumnadoView from '../views/AlumnadoView.vue';
import AlumnadoIdView from '../views/AlumnadoIdView.vue';
import DatosAlumnoView from '../views/DatosAlumnoView.vue';

const routes=[
    {path:'/',name:'home',component:HomeView},
    {path:'/about',name:'about',component:()=>import('../views/AboutView.vue')},
    {path:'/alumnado',name:'alumnado',component:AlumnadoView},
    {path:'/alumnado/:id',name:'alumnado-id',component:AlumnadoIdView},
    // Ruta para mostrar datos completos del alumno (recibe objeto via params)
    {path:'/alumno-detalle/:id',name:'alumno-detalle',component:DatosAlumnoView, props: true}
]

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;