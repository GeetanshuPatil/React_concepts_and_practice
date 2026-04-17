import React from 'react'
import PropsChild3 from './PropsChild3'

const PropsChild2 = ({n}) => {
    console.log(n);
    
  return (
    <div>
      <PropsChild3 n={10} ></PropsChild3>
    </div>
  )
}

export default PropsChild2
