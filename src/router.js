import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/MainBlock.vue')
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('./components/HelloWorld.vue')
    }
  ]
})

export { router };