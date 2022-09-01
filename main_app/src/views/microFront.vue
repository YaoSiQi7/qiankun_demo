<!--
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-26 18:21:17
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-09-01 18:02:39
 * @FilePath: \main_app\src\views\mainApp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEgit
-->
<template>
  <div class="common">
    <el-tabs type="border-card">
     <el-tab-pane label="简介-what">
      <p>
        即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立运行、独立开发、独立部署。微前端不是单纯的前端框架或者工具，而是一套架构体系
      </p>
     </el-tab-pane>
     <el-tab-pane label="发展-why">
      <el-card class="box-card">
       <div slot="header" class="clearfix">
         <h3>核心思想-分治</h3>
       </div>
       <div>
        <el-timeline hide-timestamp="true">
         <el-timeline-item>
           <el-card>
            <h4>jsp时代</h4>
            <p>
              此时沒有模块化、工程化概念，也没有技术栈的区别
              前端代码大多数必须经过后端同学在jsp里面的标签处理才可以在线上使用，这个时候拆分、分治的工作都集中在js，会分为很多套不同的js代码，在script中依次引入操作的。
              这个阶段前端只是作为一个界面脚本标记存在的而已。
            </p>
           </el-card>
         </el-timeline-item>
         <el-timeline-item>
           <el-card>
             <h4>iframe时代</h4>
             <p>
              前端技术发展,ajax使前后端分离,并且开始有了模块化的概念和标准,例如require.js。
              模块化的出现，使得网页嵌入其他网页得以实现，所以iframe就出现了。
              微前端的雏形出现了：主应用负责框架、通信、路由、资源分配,子应用负责实现业务。

             </p>
           </el-card>
         </el-timeline-item>
         <el-timeline-item>
           <el-card>
             <h4>single-spa出现了</h4>
             <p>
              前端发展,需要做的工作和能做的工作越来越多
              1、所以出现了各种自动化打包工具,从group到gulp,再到现在使用广泛的webpack,然后是新出的vite。
              2、出现了MVVM框架,我们熟悉的单页应用:Vue/React/Angular
              但问题来了,一个单页应用里资源是很多的、很重的。首页的加载速度需要很大的代价去优化它,这个时候iframe会带来比较严重的体验问题,所以single-spa出现了
             </p>
           </el-card>
         </el-timeline-item>
        </el-timeline>
       </div>
      </el-card>
     </el-tab-pane>
     <el-tab-pane label="实现-how">
      <el-card class="box-card">
       <div slot="header" class="clearfix">
         <h4>实现方式</h4>
       </div>
       <div style="text-align:left">1、自由组织式模: 没有特别形势，类似iframe嵌套、npm包自由发挥</div>
       <div style="text-align:left">2、去中心模式:  webpack5模块联邦，多个应用可以互相嵌套，可以深入到组件导入导出</div>
       <div style="text-align:left">3、基座模型:  类似微服务的注册中心模式，有个基座，其他应用都往里加</div>
      </el-card> 
      <el-card class="box-card">
       <div slot="header" class="clearfix">
         <h4>iframe</h4>
       </div>
       <div style="text-align:left">
          <div>缺点:</div>
          <div>每次进来都要加载，状态不能保留</div>
          <div>DOM 结构不共享。比如子应用里有一个 Modal，显示的时候只能在那一小块地方展示，不能全屏展示</div>
          <div>无法跟随浏览器前进后退</div>
          <div>天生的硬隔离，无法与主应用进行资源共享，交流也很困难</div>
       </div>
      </el-card>  
      <el-card class="box-card">
       <div slot="header" class="clearfix">
         <h4>single-spa</h4>
       </div>
       <div style="text-align:left">
        <div>官网的解释:是一个将多个单页面应用聚合为一个整体应用的 JavaScript 微前端框架</div>
        <div>我的理解:子应用的管理和调度者</div>
        <div>1、子应用需要配置和注册</div>
        <div>2、为子应用定义了 boostrap, load, mount, unmount 四个生命周期钩子</div>
        <div>3、监听url的变化,激活对应子应用,完成子应用生命周期的调度</div>
       </div>
      
      </el-card>   
      <el-card class="box-card">
       <div slot="header" class="clearfix">
         <h4>qiankun</h4>
       </div>
       <div style="text-align:left">
        <div>qiankun是一个基于single-spa 的微前端实现库,旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统</div>
        <div>调用几个qiankun的API即可完成应用的微前端改造</div>
       </div>
      
      </el-card>    
        
     </el-tab-pane>
     <el-tab-pane label="实践-do">
      <el-card class="box-card">
       <div slot="header" class="clearfix">
         <h4>主应用</h4>
       </div>
       <div style="text-align:left">1、安装qiankun:npm i qiankun -S</div>
       <div style="text-align:left">2、注册微应用并启动,配置项看代码:utils/app-qiankun.js</div>
       <div style="text-align:left">3、主应用自己的路由和子应用路由的区分:直接看代码home.vue和router/index.js</div>
      </el-card> 
      <el-card class="box-card">
       <div slot="header" class="clearfix">
         <h4>子应用</h4>
       </div>
       <div style="text-align:left">1、在src目录新增public-path.js文件,定一个判断是否是qiankun环境的变量</div>
       <div style="text-align:left">2、修改入口文件,导入各个声明周期</div>
       <div style="text-align:left">3、修改打包配置:不同技术栈方式不同,上代码</div>
      </el-card> 
      <el-card class="box-card">
       <div slot="header" class="clearfix">
         <h4>想到的遇到的其他的</h4>
       </div>
       <div style="text-align:left">1、过程中遇到的问题：<a href="https://qiankun.umijs.org/zh/faq">官网很全</a></div>
       <div style="text-align:left">2、展示下独立运行、独立开发、独立部署</div>
       
      </el-card> 
     </el-tab-pane>
     <el-tab-pane label="扩展-more">
      <el-card class="box-card">
       <div slot="header" class="clearfix">
         <h4>版本问题</h4>
       </div>
       <div style="text-align:left">
        <p>1、vite搭建vue3项目报错入下图,原因是node版本低(14.x),用户nvm切换成16.x就可以了</p>
        <img src="../assets/nvm1.png" alt="">
       </div>
       <div style="text-align:left">
        <p>2、angular-cli和angular版本对应问题,之前建这个项目的时候脚手架和angular版本为13.0,现在重新安装全局的脚手架升到了14.0</p>
        <img src="../assets/angular.png" alt="">
      </div>
      <div style="text-align:left">
        <router-link to="/mainApp">3、点击进入更多的拓展</router-link>
        
      </div>
      </el-card> 
     </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'common',
  data: () => ({}),
  components:{},
  methods: {},
  created(){},
  mounted(){}
};
</script>

<style scoped>
 div{
  margin-top: 20px;
 }
 .el-card__header{
  padding: 0px 20px;
 }
</style>
