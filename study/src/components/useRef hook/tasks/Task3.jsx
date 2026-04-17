import React, { useEffect, useRef } from 'react'

const Task3 = () => {
    let inputRef = useRef("")

    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      <input type="text" placeholder='type...' ref={inputRef} />
    </div>
  )
}

export default Task3
