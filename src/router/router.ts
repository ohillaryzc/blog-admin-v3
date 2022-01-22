import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'HelloWorld',
      path: '/helloworld',
      component: () => import('../components/HelloWorld.vue'),
    },
    {
      name: 'Desktop',
      path: '/desktop',
      component: () => import('../pages/desktop/index'),
    },
  ],
})

export { router }
