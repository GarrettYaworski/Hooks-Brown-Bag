//Additional Destructuring off 'react' for any hooks methods
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const HooksSwapi = () => {
//Hooks useState Syntax: const [state, setState] = useState(initialValue)
const [chars, setChars] = useState([]);

const getChars = async () => {
  let characters = await axios('/api/characters')
  console.log(characters.data.results)
  setChars(characters.data.results)
}

//useEffect will run with any update to component by default. 
//pass in empty array to have it behave like componentDidMount.
//pass in your state to have it run any time there is a change to your state
useEffect(() => {
  getChars()
}, []);

return(
  <div>
    {chars.map(char => {
      return(
        <h1 key={char.name}>
          {char.name}
        </h1>
      )
    })}
  </div>
)
}

export default HooksSwapi;