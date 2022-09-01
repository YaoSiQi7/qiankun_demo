/*
 * @Author: yaosiqi yaosiqi@trusfort.com
 * @Date: 2022-08-30 18:20:07
 * @LastEditors: yaosiqi yaosiqi@trusfort.com
 * @LastEditTime: 2022-09-01 18:54:07
 * @FilePath: \micro_app_react\src\components\Nav\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './index.css'
class Nav extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className="list-group-item" to="/github">github</NavLink>
            <NavLink className="list-group-item" to="/pubsub">pubsub</NavLink>
            <NavLink className="list-group-item" to="/fetch">fetch</NavLink>
            <NavLink className="list-group-item" to="/nestedRoutes">哔哩哔哩</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;