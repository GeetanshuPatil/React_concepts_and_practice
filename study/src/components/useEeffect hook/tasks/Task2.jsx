import React, { useEffect, useState } from 'react'

const Task2 = () => {
    let title = document.querySelector("title");
    let [state, setState] = useState("")

    useEffect(()=>{

        title.innerText = state

    },[state])
  return (
    <div>
      <input type="text" placeholder='type yourname...' onChange={(e)=>{setState(e.target.value)}} />
    </div>
  )
}

export default Task2
