import React, { Component } from 'react';
import HooksCounter from './HooksCounter'
import HooksSwapi from './HooksSwapi'
import Swapi from './Swapi'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HooksCounter/> */}
        <Swapi/>
      </div>
    );
  }
}

export default App;
