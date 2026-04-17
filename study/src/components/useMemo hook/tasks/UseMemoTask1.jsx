import React, { useMemo } from 'react'
import { useState } from 'react'

const UseMemoTask1 = () => {
    let [state1, setState1] =useState(0)
    let [state2, setState2] =useState(0)
    let val = useMemo(()=>{
        console.log("checking state1");
        
        return state1 % 2 == 0 ? "Even" : "odd"
    }, [state1])
    let checkState2= ()=>{
        console.log("checking state2");
        return state2 % 2 == 0 ? "Even" : "odd"
    }
  return (
    <div>
      <button onClick={()=>{setState1(state1+1)}}> state1 : {state1} ({val}) </button>
      <button onClick={()=>{setState2(state2+1)}}> state2 : {state2} ({checkState2()}) </button>
    </div>
  )
}

export default UseMemoTask1
