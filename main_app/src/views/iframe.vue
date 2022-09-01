<!--
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-31 16:57:45
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-09-01 16:01:25
 * @FilePath: \main_app\src\views\iframe.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common">
     <iframe :src=baseUrl style = 'width: 100%; height: 1000px;' frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'common',
  data: () => ({
    baseUrl:''
  }),
  components:{},
  methods: {},
  created(){
    this.baseUrl = window.g.angularEntey
  },
  mounted(){}
};
</script>

<style scoped>
 
</style>
