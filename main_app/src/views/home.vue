<!--
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-26 16:12:00
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-09-01 15:02:32
 * @FilePath: \main_app\src\views\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE 
-->
<template>
 <div class="main">
  <el-container>
    <el-header>
     <my-header></my-header>
    </el-header>
    <el-container>
      <el-aside width="220px"><my-aside></my-aside></el-aside>
      <el-main>
        <router-view ></router-view>
        <div id="appContainer"></div>
      </el-main>
    </el-container>
 </el-container>
 </div>
</template>
<script>
import  myHeader from '../components/myHeader'
import  myAside from '../components/myAside'
import qianKunStart from '../utils/app-qiankun';

export default {
  name: "login",
  data(){
    return {};
  },
  components:{
    myHeader,
    myAside
  },
  methods: { 
  },
  created(){
     qianKunStart()
  },
};
</script>
<style scoped>
.el-header{
  padding:0
}
</style>
