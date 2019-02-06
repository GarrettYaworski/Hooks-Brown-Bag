import React, { Component } from 'react';
import axios from 'axios'

class Swapi extends Component {
  constructor(){
    super()
    this.state = {
      characters: []
    }
  }

  async componentDidMount(){
    try {
      let chars = await axios('/api/characters')
      this.setState({characters: chars.data.results})
    } catch (error) {
      console.log('Error grabbing chars')
    }
  }
  render() {
    return (
      <div className="Swapi">
        {this.state.characters.map((char, i) =>{ 
          return(
          <h1 key={i}>
            {char.name}
          </h1>)
        })}
      </div>
    );
  }
}

export default Swapi;