/*
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-25 17:39:00
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-08-31 10:35:57
 * @FilePath: \micro_app_react\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom'

function render(props) {
  const { container } = props;
  ReactDOM.render(
    <HashRouter basename={window.__POWERED_BY_QIANKUN__ ? 'react' : '/'}>
      <App />
    </HashRouter>,
    container ? container.querySelector('#root') : document.querySelector('#root')
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
