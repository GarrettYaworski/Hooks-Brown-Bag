import React, { Component } from 'react';
import HooksCounter from './HooksCounter'
import HooksSwapi from './HooksSwapi'
import Counter from './Counter'
import Swapi from './Swapi'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HooksCounter/>
        <HooksSwapi/> */}
        <Counter/>
        <Swapi/>
      </div>
    );
  }
}

export default App;
