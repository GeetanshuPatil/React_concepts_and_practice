import React, { useReducer } from 'react'

const UseReducerTask1 = () => {
    let initial = 0;
    
    let reducer = (state, action)=>{
        switch (action) {
            
            case "i": return state + 1
            break;
            case "d": return state - 1
            break;
            case "i5": return state + 5
            break;
            case "x": return initial
            break;
            
            
            default: return state
                break;
            }
            
            
        }
    let [state, dispatch] = useReducer(reducer, initial)




  return (
    <div>
        <h1> state : {state}</h1>
      <button onClick={()=>{dispatch("i")}}>+</button>   
      <button onClick={()=>{dispatch("d")}}>-</button>   
      <button onClick={()=>{dispatch("i5")}}>+5</button> 
      <button onClick={()=>{dispatch("x")}}>x</button>   
    </div>
  )
}

export default UseReducerTask1
