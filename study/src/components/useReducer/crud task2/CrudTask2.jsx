import React, { useContext } from 'react'
import FormReducer from './FormReducer'
import DisplayCrudTask2 from './DisplayCrudTask2'
import { Context} from './ReducerContext'

const CrudTask2 = () => {
    
    
  return (
  <div className="flex flex-col gap-6">
    <FormReducer />
    <DisplayCrudTask2 />
  </div>
);
}

export default CrudTask2
