<!--
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-30 13:40:15
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-09-01 11:56:49
 * @FilePath: \micro_app_vue3\src\views\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
  import { ref } from 'vue'
  
  defineProps({
    msg: String
  })
  
  const count = ref(0)
  </script>
  
  <template>
    <div>
    <div><button><a src="https://cn.vuejs.org/">vue3学习去官网就好</a></button></div>
    <div><button><a src="https://vitejs.cn/">vite官网</a></button></div>
    <div><button><a src="https://mp.weixin.qq.com/s/CVdHGqYjBQQLDA_yS_w1zA">搭建Vue3架构</a></button></div>
    <div><button><a src="https://mp.weixin.qq.com/s/duAof_T8-fFnxxCLsYQTfQ">Vue3结合TS项目开发实践总结</a></button></div>
    <div><button><a src="https://mp.weixin.qq.com/s/E47CaedLkn_z2iqXWkYDmg">vite知识</a></button></div>
    <div><button><a src="https://note.youdao.com/s/4D04wsV">自己的vue2和vue3笔记</a></button></div>
    
    </div>
  </template>
  
  <style scoped>
  div{
    margin-top:30px
  }
    
  </style>
  