import React, { useRef } from 'react'

const Task4 = () => {
    let countRef = useRef(0)
  return (
    <div>
      <h1>count:{countRef.current}</h1>
      <button onClick={()=>{
        countRef.current ++
        console.log(countRef.current);
        
      }}>+</button>
    </div>
  )
}

export default Task4
