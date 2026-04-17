import React, { useEffect, useState } from 'react'

const Task7 = () => {
    let [count, setCount] = useState(0)
    setInterval(() => {
        setCount(count+1)
    }, 1000);
    useEffect(()=>{

    },[count])
  return (
    <div>
      <p>counter:{count}</p>
      <button >reset</button>
    </div>
  )
}

export default Task7
