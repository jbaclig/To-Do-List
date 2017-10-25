import React, { Component } from 'react';
import List from '../List';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do List</h1>
        </header>
        <List />
      </div>
    );
  }
}

export default App;
