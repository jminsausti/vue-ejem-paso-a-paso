// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Products from '../components/Products.vue';

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  // Otras rutas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
