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
        <h1>WITH CLASSES</h1>
        <Counter/>
        <Swapi/>
        <h1>WITH HOOKS</h1>
        <HooksSwapi/>
        <HooksCounter/>
        
      </div>
    );
  }
}

export default App;
