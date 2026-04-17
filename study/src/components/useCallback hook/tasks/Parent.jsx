import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
  let [state1, setState1] = useState(0)
  let [state2, setState2] = useState(0)

    let val = useCallback(()=>{
      ()=>{
        console.log("function called");}
    },[state1])
  return (
    <div>
      <button onClick={()=>{setState1(state1+1)}}>state1:{state1}</button>
      <button onClick={()=>{setState2(state2+1)}}>state2:{state2}</button>
      <br />======================================
      <Child func={val}></Child>
    </div>
  )
}

export default Parent
