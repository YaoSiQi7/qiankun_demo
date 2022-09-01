import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class List extends Component {
  state = {
    list: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false,//标识是否处于加载中
    err: '',//存储请求相关的错误信息
  }
  componentDidMount() {
    this.token = PubSub.subscribe('getList', (_, data) => {
      this.setState(data)
    })
  }
  componentWillUnmount() {

  }
  render() {
    const { list, isFirst, isLoading, err } = this.state
    console.log(list,'list')
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，请输入关键字，点击查询</h2> :
            isLoading ? <h2>加载中，请稍后</h2> :
              err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                list.map(item => {
                  return (
                    <div className="card" key={item.id}>
                      <a href={item.gists_url} target="_blank" rel="noreferrer" >
                        <img src={item.avatar_url} alt='' style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{item.login}</p>
                    </div>
                  )
                })
        }
      </div>
    );
  }
}

export default List;