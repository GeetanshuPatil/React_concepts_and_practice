import React from 'react'
import { useAdd } from '../useAdd'

const Random = () => {
   let addition = useAdd(10,20)
  return (
    <div>
      Solution= {addition}
    </div>
  )
}

export default Random
