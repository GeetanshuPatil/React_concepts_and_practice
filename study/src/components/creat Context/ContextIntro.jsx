import React, { useEffect, useState } from 'react'
import UserProvider, { UserContext } from './UserContext'
import Cart from './pages/Cart'
import Pay from './pages/Pay'
import Home from './pages/Home'
import axios from 'axios'

const ContextIntro = () => {

    // let data = "Any type of DATA"
    
  return (
    // <UserContext.Provider value={apiData}>
    //         <Home></Home>
    //         <Cart></Cart>
    //         <Pay></Pay>
    //     </UserContext.Provider>
    <UserProvider></UserProvider>
  )
}

export default ContextIntro
