import React, { Component } from "react";
import PubSub from "pubsub-js";

class Search extends Component {
  state = { searchVal: "" };
  changeSearchVal = (event) => {
    const { value } = event.target;
    this.setState({ searchVal: value });
  };
  handelGetObj = async (searchVal) => {
    PubSub.publish("getList", { isFirst: false, isLoading: true });
    try {
      const response = await fetch(`http://localhost:3000/search/users?q=${searchVal}`);
      const data = await response.json();
      PubSub.publish("getList", { isLoading: false, list: data.items });
    } catch (error) {
      PubSub.publish("getList", { isLoading: false,  err: error.message });
    }
  };
  render() {
    const { searchVal } = this.state;
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users Pubsub</h3>
          <div>
            <input
              type="text"
              placeholder="enter the name you search"
              onChange={this.changeSearchVal}
            />
            &nbsp;
            <button
              onClick={() => {
                this.handelGetObj(searchVal);
              }}
            >
              Search
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
