import React, { useContext } from 'react'
import RouterToggle from './routers/RouterToggle'
import Login from './task1 pages/Login'
import Home from './task1 pages/Home'
import Layout1 from './layouts/Layout1'

const Task1 = () => {
  return (
    <div>
      <RouterToggle>
        <Layout1></Layout1>
      </RouterToggle>
    </div>
  )
}

export default Task1
