import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, incBy5, reset, sub } from '../../../toolkit/slice'

const ReduxTask1 = () => {
  let dispatch = useDispatch()
  let data = useSelector(val => val)
  return (
    <div>
      <h1>Count : {data}</h1>
      <button onClick={()=>{dispatch(add())}}>+</button>
      <button onClick={()=>{dispatch(sub())}}>-</button>
      <button onClick={()=>{dispatch(incBy5(5))}}>+5</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default ReduxTask1

