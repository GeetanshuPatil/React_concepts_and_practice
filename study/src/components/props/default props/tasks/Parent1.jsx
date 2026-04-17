import React from 'react'
import Child1 from './Child1'

const Parent1 = () => {
  return (
    <div>
      <Child1 props={obj={name:"tinku"}}
            // a={10}
            b="string"
            arr={[10,20,30]}></Child1>
    </div>
  )
}

export default Parent1
