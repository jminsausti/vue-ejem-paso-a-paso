import { createRouter, createWebHistory } from 'vue-router';
import TasksView from '../views/TasksView.vue';
import HelpView from '../views/HelpView.vue';

const routes = [
  { path: '/', name: 'tasks', component: TasksView },
  { path: '/help', name: 'help', component: HelpView },
  // para cualquier ruta que no exista redirigimos a /
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
