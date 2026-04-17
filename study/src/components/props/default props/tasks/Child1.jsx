import React from 'react'

const Child1 = ({a=0, props ,arr, b="bye"}) => {
    console.log(a);
    console.log(props);
    console.log(arr);
    console.log(b);
 
  return (
    <div>
      
    </div>
  )
}

export default Child1
