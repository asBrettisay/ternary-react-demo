import React, { Component } from 'react';
import { getData } from './services/data.js';

class AsyncTernaryDemo extends Component {
  state = { }

  componentDidMount(prevProps, prevState) {
    getData().then(data => {
      this.setState({
        data
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.data ? this.state.data.name : "Loading..."}
      </div> 
    );
  }
}

export default AsyncTernaryDemo;
