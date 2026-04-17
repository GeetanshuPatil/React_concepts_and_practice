import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Task8 = () => {
    let [state, setState] = useState("")
        
    useEffect(()=>{
        axios.get("http://localhost:8080/users").then((res)=>{
            console.log(res.data);
        })
    },[])
  return (
    <div>
      <input type="text" value={state} onChange={(e)=>{
        setState(e.target.value)

      }} />
    </div>
  )
}

export default Task8
