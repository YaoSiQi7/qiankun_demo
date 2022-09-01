import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
  state = { searchVal: '' }
  changeSearchVal = (event) => {
    const { value } = event.target
    this.setState({ searchVal: value })
  }
  handelGetObj = (searchVal) => {
    this.props.getObj({isFirst:false,isLoading:true})
    axios.get(`http://localhost:3000/search/users?q=${searchVal}`).then(
      response => {
        //请求成功后通知App更新状态
        this.props.getObj({ isLoading: false, list: response.data.items })
      },
      error => {
        //请求失败后通知App更新状态
        this.props.getObj({ isLoading: false, err: error.message })
      }
    )
  }
  render() {
    const { searchVal } = this.state
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input type="text" placeholder="enter the name you search" onChange={this.changeSearchVal} />
            &nbsp;
            <button onClick={() => { this.handelGetObj(searchVal) }}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;