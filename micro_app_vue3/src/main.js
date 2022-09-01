import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index";

import { exportLifeCycleHooks } from "@sh-winter/vite-plugin-qiankun/dist/helper";
createApp(App).use(router).mount('#vue3-app')

 
exportLifeCycleHooks({
	bootstrap() {
	},
	mount() {
    createApp(App).use(router).mount('#vue3-app')
	},
	unmount() {}
});
 