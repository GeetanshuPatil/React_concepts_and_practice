import React from 'react'
import ReduxTask1 from './tasks/ReduxTask1'
import { Provider } from 'react-redux'
import store1 from '../../toolkit/store'

const ReduxIntro = () => {
  return (
    <div>
      <Provider store={store1}>
        <ReduxTask1></ReduxTask1>
      </Provider>
    </div>
  )
}

export default ReduxIntro
