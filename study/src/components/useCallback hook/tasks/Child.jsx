import React, { memo } from 'react'

const Child = ({func}) => {
  console.log("Child");
  
  return (
    <div>
      <button onClick={func} > child </button>
    </div>
  )
}

export default memo(Child)
