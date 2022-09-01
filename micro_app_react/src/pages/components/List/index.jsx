import React, { Component } from 'react';

class List extends Component {
  render() {
    const { list, isFirst, isLoading, err } = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，请输入关键字，点击查询</h2> :
            isLoading ? <h2>加载中，请稍后</h2> :
              err ? <h2 style={{color:'red'}}>{err}</h2> :
                list.map(item => {
                  return (
                    <div className="card" key={item.id}>
                      <a href={item.gists_url} rel="noreferrer"  target="_blank">
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