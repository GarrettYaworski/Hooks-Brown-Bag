import React, { useState } from 'react';
import Counter from './Counter'

const HooksCounter = () => {
 
  const [count, incrementCount] = useState(0)

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => incrementCount(count - 1)}>Decrement</button>
      <button onClick={() => incrementCount(count + 1)}>Increment</button>
    </div>
  )
}

export default HooksCounter;