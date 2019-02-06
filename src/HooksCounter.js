import React, {useState} from 'react'

const HooksCounter = () => {
  //Hooks useState Syntax: const [state, setState] = useState(initialValue)
const [count, incrementCount] = useState(0);

return(
  <div>
    <h1>{count}</h1>
    {/*function name matches name given when useState is called to initialize state 
    ***does not merge objects by default. If you want that behavior use spread operator****/}
    <button onClick={() => incrementCount(count - 1)}>Decrement</button>
    <button onClick={() => incrementCount(count + 1)}>Increment</button>
    
  </div>
)
}

export default HooksCounter;