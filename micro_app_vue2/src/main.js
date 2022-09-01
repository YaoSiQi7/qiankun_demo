/*
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-25 16:27:37
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-08-30 11:19:31
 * @FilePath: \micro_app_vue2\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import './public-path';
import router from './router';

Vue.config.productionTip = false

let instance = null;
function render (props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#vue2-app') : '#vue2-app');
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// 导出微应用生命周期
export async function bootstrap () {
  console.log('[vue] vue app bootstraped');
}
export async function mount (props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount () {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}
export async function update (props) {
  console.log('update props', props);
}
