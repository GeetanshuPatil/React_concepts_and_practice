import React, { useEffect } from 'react'
import { useState } from 'react'

const Task1 = () => {
  let [state, setState] = useState(0)

  useEffect(()=>{
    console.log("count updated");
    
  },[state])
    
  return (
    <div>
      <div>counter: {state}</div>
      <button onClick={()=>{setState(state+1)}}>Increment</button>
      <button onClick={()=>{setState(state-1)}}>Decrement</button>
    </div>
  )
}

export default Task1

