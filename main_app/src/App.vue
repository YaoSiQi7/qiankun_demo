<!--
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-26 10:51:16
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-08-30 10:23:21
 * @FilePath: \main_app\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
     <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
