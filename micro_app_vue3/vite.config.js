/*
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-25 17:18:45
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-08-30 14:59:02
 * @FilePath: \micro_app_vue3\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { qiankunPlugin,transformAssetUrl } from '@sh-winter/vite-plugin-qiankun'
import { name as packageName } from './package.json'
export default defineConfig({
  base: `/${packageName}/`,
  plugins: [
    vue({
        template: {
            compilerOptions: {
                nodeTransforms: [transformAssetUrl]
            }
        }
    }),
    qiankunPlugin({ packageName })
   ],
  headers: {
      'Access-Control-Allow-Origin': '*',
  },
  hostname: '0.0.0.0',
  port: 8080,
  base: './',
})
