<!--
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-26 14:05:48
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-08-29 17:39:56
 * @FilePath: \main_app\src\views\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
 <div class="logIn">
  <el-card class="box-card">
   <div slot="header" class="clearfix">
    <span>登录</span>
   </div>
   <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="70px" class="demo-ruleForm">
     <el-form-item label="用户名" prop="user">
       <el-input v-model="ruleForm.user"></el-input>
     </el-form-item>
     <el-form-item label="密码" prop="pass">
       <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
     </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="submitForm()">提交</el-button>
     </el-form-item>
   </el-form>
  </el-card>
 </div>
</template>
<script>
import { MENU_LIST } from "../utils/menu";
export default {
  name: "login",
  data(){
    return {
      ruleForm: {
        pass: '',
        user: ''
      },
      firstPage:''
    };
  },
  methods: { 
   submitForm() {
    let sysType = window.g.sysType
    this.firstPage = MENU_LIST[sysType][0]
     this.$router.push({
       path:this.firstPage.path
     })
   }
  },
  created() {
    let key = window.g.sysType
    let MenuItems = MENU_LIST[key]
    this.firstPage = MenuItems[0].path
    localStorage.setItem("MenuItems", JSON.stringify(MenuItems));
  },
};
</script>
<style scoped>
.logIn{
  position:relative
}
.box-card{
  width:500px;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%)
}
</style>
