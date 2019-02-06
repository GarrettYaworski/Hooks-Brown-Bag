import React, {useState, useEffect} from 'react'
import axios from 'axios'

const HooksSwapi = () => {
const [chars, setChars] = useState([]);

const getChars = async () => {
  let characters = await axios('/api/characters')
  console.log(characters.data.results)
  setChars(characters.data.results)
}

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