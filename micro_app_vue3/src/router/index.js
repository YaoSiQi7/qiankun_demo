/*
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-30 13:41:35
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-08-30 16:43:54
 * @FilePath: \micro_app_vue3\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter ,createWebHashHistory } from "vue-router";
import index from "../views/index.vue";

const routes = [
  {
    path: '/',
    redirect: '/vue3/index'
  },
  {
    path: '/vue3/index',
    name: 'index',
    component: index
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
