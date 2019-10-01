import React, { Component } from 'react';
import { TimelineLite } from 'gsap/TimelineLite'
import axios from 'axios'
import './App.css';
const elementsArray = [{name: "garrett", id: 0}, {name: 'sam', id: 1}, {name: 'Norman', id: 2}]


class Swapi extends Component {
  constructor(props){
    super(props);
    this.myTween = new TimelineLite({paused: true});
    this.myElements = [];
  }
  
  componentDidMount(){
    this.myTween.staggerTo(this.myElements, 0.5, {y: 0, autoAlpha: 1}, 2);
    setInterval(() => { 
      console.log('hit')
      this.myTween.restart()}
      , 5000)
  }
  
  render(){
    return <div>
      <ul>
        {elementsArray.map((element, index) => <li
          key={element.id}
          ref={li => this.myElements[index] = li}
        >
          {element.name}
        </li>)}
      </ul>
    </div>;
  }
}

export default Swapi;

