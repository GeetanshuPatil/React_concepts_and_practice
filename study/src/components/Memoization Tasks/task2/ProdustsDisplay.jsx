import React, { useState } from 'react'

const ProdustsDisplay = ({product}) => {

   console.log("renderd :" , product);
   


  return (
      <div className="bg-white shadow-md rounded-lg px-4 py-2">
      {product}
    </div>
  )
}

export default React.memo(ProdustsDisplay)
