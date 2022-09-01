import React, { Component } from 'react';
import Search from '../components/SearchFetch'
import List from '../components/ListFetch'
class Fetch extends Component {
  render() {
    return (
      <div>
        <Search />
        <List />
      </div>
    );
  }
}

export default Fetch;