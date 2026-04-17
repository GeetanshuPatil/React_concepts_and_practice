import React, { useState } from 'react'
import MemoChild from './MemoChild'

const MemoParent = () => {

  let [a, setA] = useState(0)

  return (
    <div>
      <button onClick={()=>{setA(a+1)}}>State:{a}</button>
      <MemoChild a={a}></MemoChild>
    </div>
  )
}

export default MemoParent
