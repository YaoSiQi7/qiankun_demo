import React, { Component } from 'react';
import Search from '../components/SearchPubsub'
import List from '../components/ListPubsub'
class Pubsub extends Component {
  render() {
    return (
      <div>
        <Search />
        <List />
      </div>
    );
  }
}

export default Pubsub;