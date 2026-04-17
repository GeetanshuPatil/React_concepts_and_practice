import React, { useRef } from 'react'

const Task1 = () => {
    let textRef = useRef(null)

  return (
    <div>
      <h1 ref={textRef} >Hello</h1>
      <button onClick={()=>{
        console.log(textRef);
        textRef.current.style.backgroundcolor = "green"
      }}>Click</button>
    </div>
  )
}

export default Task1
