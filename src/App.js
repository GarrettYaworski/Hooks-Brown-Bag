import React, { Component } from 'react';
import HooksCounter from './HooksCounter'
import HooksSwapi from './HooksSwapi'
import Swapi from './Swapi'
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <HooksSwapi/>
        <HooksCounter/>
        <Swapi/>
      </div>
    );
  }
}

export default App;
