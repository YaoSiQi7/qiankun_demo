/*
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-26 18:01:10
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-09-01 17:14:46
 * @FilePath: \main_app\src\utils\app-qiankun.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { registerMicroApps, runAfterFirstMounted, start } from 'qiankun'

const qianKunStart = () => {
  //处理子应用注册表数据
  const apps = [] // 子应用数组盒子
  const vue2={
    name: "vue2",
    entry: window.g.vue2Entey,
    container: "#appContainer", 
    activeRule: "#/vue2"
  }
  const vue3={
    name: "vue3",
    entry:window.g.vue3Entey,
    container: "#appContainer", 
    activeRule: "#/vue3"
  }
  const react={
    name: "react",
    entry:window.g.reactEntey,
    container: "#appContainer", 
    activeRule: "#/react"
  }
  apps.push(vue2,vue3,react)
   

// 注册子应用
  registerMicroApps(
    apps,
    // {
    //   beforeLoad: [
    //     app => {
    //     }
    //   ],
    //   beforeMount: [
    //     app => {
    //     }
    //   ],
    //   afterUnmount: [
    //     app => {
    //     }
    //   ]
    // }
  )

 //  需要进入的子应用路由前缀
 //setDefaultMountApp('/ipa')
 // 启动微前端
     start()
  
 // 微前端启动进入第一个子应用后回调函数
   runAfterFirstMounted(() => {
   })
}

export default qianKunStart
