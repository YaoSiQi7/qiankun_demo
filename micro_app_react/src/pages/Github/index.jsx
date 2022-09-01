import React, { Component } from 'react';
import Search from '../components/Search'
import List from '../components/List'

class Github extends Component {
  state = {
    list: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false,//标识是否处于加载中
    err: '',//存储请求相关的错误信息
  }
  getObj = (obj) => {
    this.setState(obj)
    console.log(this.state,808080)
  }
  render() {
    return (
      <div>
        <Search/>
        <List {...this.state} />
      </div>
    );
  }
}

export default Github;