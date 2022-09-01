/*
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-26 14:35:49
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-09-01 14:42:08
 * @FilePath: \main_app\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let loginPage 
loginPage = () => import( /* webpackChunkName: "login" */ '../views/login.vue')
//登录
const Login = {
  path: '/login',
  name: 'login',
  component:loginPage 
}
const mainApp = resolve => {
  import('../views/mainApp').then(module => {
    resolve(module);
  });
};
const iframe = resolve => {
  import('../views/iframe').then(module => {
    resolve(module);
  });
};
const microFront = resolve => {
  import('../views/microFront').then(module => {
    resolve(module);
  });
};

// 业务主页面
const Home = {
  path: '/home',
  name: 'home',
  component: () => import( /* webpackChunkName: "home" */ '../views/home.vue'), 
  children: [
    {
      path: '/mainApp',
      name: 'mainApp',
      component: mainApp
    },
    {
      path: '/iframe',
      name: 'iframe',
      component: iframe
    },
    {
      path: '/microFront',
      name: 'microFront',
      component: microFront
    }
  ]
};
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  Login,
  Home,
  {
    path: '/vue2/*',
    name: 'vue2',
    component: () => import( /* webpackChunkName: "home" */ '../views/home.vue'), 
  },
  {
    path: '/vue3/*',
    name: 'vue3',
    component: () => import( /* webpackChunkName: "home" */ '../views/home.vue'),   
  },
  {
    path: '/react/*',
    name: 'react',
    component: () => import( /* webpackChunkName: "home" */ '../views/home.vue'),   
  },
  {
    path: '/js/*',
    name: 'js',
    component: () => import( /* webpackChunkName: "home" */ '../views/home.vue'),   
  },
  {
    path: '/ts/*',
    name: 'ts',
    component: () => import( /* webpackChunkName: "home" */ '../views/home.vue'),   
  }
];
const router = new VueRouter({
  routes
})

export default router
