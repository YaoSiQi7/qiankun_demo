import VueRouter from 'vue-router';
import Vue from 'vue'

Vue.use(VueRouter)
const index = resolve => {
  import('../views/').then(module => {
    resolve(module);
  });
};
const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/vue2/index',
    name: 'vue2',
    component: index
  },
];
const router = new VueRouter({
  routes
});
export default router;