/*
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-26 17:14:48
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-08-30 10:03:56
 * @FilePath: \main_app\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080, // 端口号
    hotOnly: false,
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    proxy: null, // 配置跨域处理,只有一个代理
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}