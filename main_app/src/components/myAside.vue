<!--
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-26 16:49:16
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-09-01 14:55:48
 * @FilePath: \main_app\src\components\myAside.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
       <el-menu-item   v-for="(item, index) in menuList" :key = 'index' :index = 'index+""' @click="gotoPage(item)">
         <i class="el-icon-location"></i>
         <span>{{item.name}}</span>
       </el-menu-item >
    </el-menu>
  </div>
</template>

<script>
import { MENU_LIST } from "../utils/menu";

export default {
  name: 'myAside',
  data: () => ({
    menuList:[]
  }),
  components:{},
  methods: {
    gotoPage(item){
      this.$router.push({
        path:item.path
      })
    }
  },
  created(){
    let sysType = window.g.sysType
    this.menuList = MENU_LIST[sysType]
    console.log(this.menuList)
  },
  mounted(){}
};
</script>

<style scoped>
 .el-menu-vertical{
   height:3000px;
   background-color: #f5f5f6;
   width: 220px
 }
</style>
