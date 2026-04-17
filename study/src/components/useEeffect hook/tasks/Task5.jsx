import React, { useEffect, useState } from 'react'

const Task5 = () => {
    let [state, setState] = useState("")
    let [count, setCount] = useState(0)
    let handleChange = (e)=>{
        setState(e.target.value)
    }
    useEffect(()=>{
        setCount(state.length)
    },[state])
  return (
    <div>
      <textarea type="text" onChange={handleChange} />
      <p>count: {count}</p>
    </div>
  )
}

export default Task5
