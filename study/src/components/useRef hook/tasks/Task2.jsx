import React, { useRef } from 'react'

const Task2 = () => {
    let textRef = useRef(null)
    let mobileRef = useRef(null)
    let passRef = useRef(null)
  return (
    <div>
      <input type="text"     placeholder='type...' ref={textRef}/>
      <input type="text"     placeholder='type...' ref={mobileRef}/>
      <input type="password" placeholder='type...' ref={passRef}/>
      <button onClick={()=>{
        console.log(textRef.current.value);
        console.log(mobileRef.current.value);
        console.log(passRef.current.value);
        
      }}>submit</button>
    </div>
  )
}

export default Task2
