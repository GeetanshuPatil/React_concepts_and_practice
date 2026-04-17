import React, { useEffect, useState } from 'react'

const Task6 = () => {
    let [color, setColor] = useState("")
    useEffect(()=>{
        document.body.style.backgroundColor = color
    },[color])
  return (
    <div>
      <button onClick={()=>{setColor("red")}}>red</button>
      <button onClick={()=>{setColor("green")}}>green</button>
      <button onClick={()=>{setColor("blue")}}>blue</button>
    </div>
  )
}

export default Task6
