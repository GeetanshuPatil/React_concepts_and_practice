import React from 'react'

const MemoChild = ({a}) => {
  
  console.log("child called");
  
  return (
    <div>
      child
    </div>
  )
}

export default React.memo(MemoChild)
