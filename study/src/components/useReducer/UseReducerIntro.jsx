import React from 'react'
import UseReducerTask1 from './tasks/UseReducerTask1'
import UseReducerTask2 from './tasks/UseReducerTask2'
import UseReducerCrud from './tasks/UseReducerCrud'
import CrudTask2 from './crud task2/CrudTask2'
import ReducerContext from './crud task2/ReducerContext'

const UseReducerIntro = () => {
  return (
    <div>
      {/* <UseReducerTask1></UseReducerTask1> */}
      {/* <UseReducerTask2></UseReducerTask2> */}
      {/* <UseReducerCrud></UseReducerCrud> */}
      <ReducerContext>
        <CrudTask2></CrudTask2>
      </ReducerContext>
    </div>
  )
}

export default UseReducerIntro
