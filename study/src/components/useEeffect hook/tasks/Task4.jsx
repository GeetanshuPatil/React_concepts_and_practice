import React, { useEffect, useState } from 'react'

const Task4 = () => {
    let [state, setState] = useState("")
    let [message, setMessage] = useState("")
    let handleChange = (e)=>{
        setState(e.target.value)
    }
    useEffect(()=>{
        if(state.length < 6){
            setMessage("weak password")
        }else{
            setMessage("strong password")
        }
    },[state])
  return (
    <div>
      <input type="password" onChange={handleChange} placeholder='Type password..' />
    <p>{message}</p>
    </div>
  )
}

export default Task4
