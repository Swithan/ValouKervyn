import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../views/Homepage.vue') },
  { path: '/paintings/:category', component: () => import('../views/Paintings.vue') },
  { path: '/paintings/:category/:id', component: () => import('../views/PaintingDetail.vue') },
  { path: '/presentation', component: () => import('../views/Presentation.vue') },
  { path: '/events', component: () => import('../views/Events.vue') },
  { path: '/events/:id', component: () => import('../views/EventDetail.vue') },
  { path: '/contact', component: () => import('../views/Contact.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/404NotFound.vue') },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
