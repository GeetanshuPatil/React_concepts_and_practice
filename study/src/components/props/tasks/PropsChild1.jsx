import React from 'react'
import PropsChild2 from './PropsChild2';

const PropsChild1 = ({n}) => {
  console.log(n);
  
  return (
    <div>
      <PropsChild2 n={10}></PropsChild2>
    </div>
  )
}

export default PropsChild1

