import React, { Component } from 'react';
import TernaryDemo from './TernaryDemo';
import AsyncTernaryDemo from './AsyncTernaryDemo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ternary Demo</h2>
        </div>

          <TernaryDemo data="Got some data!"/>
          <TernaryDemo />

          <AsyncTernaryDemo />

        
      </div>
    );
  }
}

export default App;
