import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const HooksSwapi = () => {

  const [chars, setChars] = useState([]);

  const getChars = async () => {
    let characters = await Axios('/api/characters')
    setChars(characters.data.results)
  }
  
  useEffect(getChars, [])

  return(
    <div>
      {chars.map(char => {
        return (
          <h1>{char.name}</h1>
        )
      })}
    </div>
  )
}